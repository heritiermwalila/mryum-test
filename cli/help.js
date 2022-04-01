module.exports = {
    cmd: {
        type: 'input',
        name: 'action',
        message: 'Use ENTER to view a list of commands'
    },
    cmdList: {
        type: 'input',
        name: 'list',
        message: `
        Use the the following:
        MOVE: make a move
        LEFT: turn left
        RIGHT: turn right
        QUIT: quit the game
        : `
    }
}