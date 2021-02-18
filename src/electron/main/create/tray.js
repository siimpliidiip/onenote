const {app, Menu, Tray } = require('electron')

const menus = require('../menus');
const action = require('../action');

const destroyTray  = () => {
    if (global.p3x.onenote.tray !== undefined) {
        global.p3x.onenote.tray.destroy()
        global.p3x.onenote.tray = undefined
    }
}

let shownRestart = false

function mainTray() {

    app.whenReady().then(() => {
        //destroyTray();

        if (!global.p3x.onenote.disableHide) {

            if (global.p3x.onenote.tray === undefined ) {
                global.p3x.onenote.tray = new Tray(global.p3x.onenote.iconFile)
            }

            global.p3x.onenote.tray.setToolTip(`${global.p3x.onenote.title} v${global.p3x.onenote.pkg.version}`)
            const click = () => {
                console.info('tray on click is executed - if not shown in console. this click is not executed.')
                action.toggleVisible()
            }
            global.p3x.onenote.tray.on('click', click)

            const menu = menus.default()

            const contextMenu = Menu.buildFromTemplate(menu)
            global.p3x.onenote.tray.setContextMenu(contextMenu)

        } else if (global.p3x.onenote.tray !== undefined) {
            let { args, dialog} = require('electron')
            //console.log('args', args, 'process.env.APPIMAGE', process.env.APPIMAGE)

            if (shownRestart === false) {
                shownRestart = true
                dialog.showMessageBoxSync(global.p3x.onenote.window.onenote, {
                    type: 'info',
                    title: global.p3x.onenote.lang.title,
                    message: global.p3x.onenote.lang.restart,
                    buttons: [global.p3x.onenote.lang.button.ok]
                })
            }

            if (process.env.APPIMAGE) {
                if (args === undefined) {
                    args = []
                }
                const options = {args};
                if (process.env.APPIMAGE) {
                    options.execPath = process.env.APPIMAGE;
                    options.args.unshift('--appimage-extract-and-run');
                }
                app.relaunch(options);
                app.exit(0);
            } else {
                app.relaunch();
                app.exit(0);
            }


        }
    })

}

module.exports = mainTray;
