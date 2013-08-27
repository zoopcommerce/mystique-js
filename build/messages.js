define(["util/build/fs"], function(fs) {

    return {
        start:function(
            mid,
            referenceModule,
            bc
        ){

            var moduleInfo = bc.getSrcModuleInfo('mystique-common/translations/messages.json', null, true),
                textResource = bc.resources[moduleInfo.url];

            return [{
                module:textResource,
                pid:moduleInfo.pid,
                mid:moduleInfo.mid,
                deps:[],
                getText:function(){
                    return fs.readFileSync(this.module.src, "utf8");
                },
                internStrings:function(){
                    return ["url:" + this.mid, this.getText()];
                }
            }];
        }
    };
});
