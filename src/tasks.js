function createSticker () {
    const widget = {
        "type": "card",
        "title": "developer card",
        "style": {
          "backgroundColor": "#ff00ff"
        }
      }

      miro.board.widgets.create(widget)
}