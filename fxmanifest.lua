fx_version 'cerulean'
lua54 'yes'
games { 'gta5' }
author 'Fox Team'
description 'A CoolDown System By Fox Team'
version '1.0.0'

client_scripts {
    'client/**.lua',
}

server_scripts {
    'server/**.lua',
}

shared_scripts {
    'config.lua',
}

files {
    'ui/index.html',
    'ui/app.js',
    'ui/css/style.css',
    'ui/images/**',
}

ui_page {'ui/index.html'}

escrow_ignore { 
    'config.lua',
    'server/**.lua',
    'client/**.lua',
}