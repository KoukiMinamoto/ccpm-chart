function createSticker () {
    const widget = [{
        "type": "sticker",
        "title": "Enter Task",
        "style": {
          "backgroundColor": "#ff00ff"
        }
      }]

      miro.board.widgets.create(widget)
}