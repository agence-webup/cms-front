import MediumEditor from 'medium-editor'

export class CMSFront {
  constructor () {
    this.editableAreas = []
    this.counter = 0
    this.editor = new MediumEditor('.editable', {
      toolbar: {
        buttons: ['bold', 'italic', 'underline', 'anchor', 'h2', 'h3', 'quote', 'orderedlist']
      }
    })
    console.log(this.editor)
  }

  init () {
    this.detectContent()
    console.log(this.editableAreas)
    this.updateCounter()
    this.bindEvents()
  }

  bindEvents () {
    document.querySelector('[data-cms-save').addEventListener('click', (el) => {
      this.checkEdited()
    })
  }

  detectContent () {
    document.querySelectorAll('[data-cms').forEach(el => {
      this.counter++
      // el.contentEditable = true
      const id = el.dataset.cms
      const allowedTags = el.dataset.cmsTag || null
      console.log(el.innerHTML)
      this.editableAreas.push({
        id,
        allowedTags,
        edited: false,
        html: el.innerHTML
      })
      this.editor.addElements(el)
    })
  }

  updateCounter () {
    document.querySelector('[data-cms-count').innerHTML = this.counter
  }

  checkEdited () {
    this.editableAreas.forEach(el => {
      if (document.querySelector('[data-cms="' + el.id + '"').innerHTML !== el.html) {
        console.log(el.id, 'has been edited')
      }
    })
  }
}
