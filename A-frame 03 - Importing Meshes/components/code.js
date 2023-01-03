AFRAME.registerComponent('mesh-shadows', {
    update:function(){// update is a built-in method
        this.el.addEventListener('model-loaded', ()=>{
            const obj = this.el.getObject3D('mesh');
            obj.children.forEach((model)=>{
                console.log("found cube");
                model.castShadow=true;
                model.receiveShadow=true;
                model.material.shadowSide=1;
            });
        });
    },
    remove:function(){
        console.log("Remove model-loaded");
        // this.el.removeEventListener('model-loaded');
    }
});