var profile = {
    "basePath":"../../",
    "releaseDir":"./mystique/temp",
    "action":"release",
    "layerOptimize":"closure",
    "mini":1,
    "buildReportDir": ".",
    "buildReportFilename": "build-report.txt",
    "packages":[
        {
            "name":"mystique",
            "location":"mystique"
        },
        {
            "name":"mystique-common",
            "location":"mystique-common"
        }
    ],
    "plugins": {
        "mystique/messages": "mystique/build/messages"
    },
    "layers":{
        "mystique/mystique":{
        }
    }
}
