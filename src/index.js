function run() {
    miro.initialize({
        extensionPoints: {
            bottomBar: {
                title: 'CCPM Chart',
                svgIcon: null,
                onClich: () => {
                    miro.board.ui.openLibrary('tasks.html', {title: 'CCPM Chart'})
                },
            },
        },
    })
}

miro.onReady(run)