function createSticker () {
    const widget = [{
        "type": "sticker",
        "title": "Enter Task",
        "scale": 4.0,
        "style": {
          "backgroundColor": "#ff00ff"
        }
      }]

      miro.board.widgets.create(widget)
}