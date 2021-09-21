function createSticker () {
    const widget = [{
        "type": "sticker",
        "title": "Enter Task",
        "y": 0.0,
        "x": 0.0,
        "style": {
          "backgroundColor": "#ff00ff"
        }
      }]

      miro.board.widgets.create(widget)
}