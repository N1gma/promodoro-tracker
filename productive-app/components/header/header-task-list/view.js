class View{
    constructor(el){
        this.$header = $(el).find('.main-head');
    }
    fixHeader(){
        this.$header.addClass("fixed-main-head");
    }
    unfixHeader(){
        this.$header.removeClass("fixed-main-head");
    }
}

export default View;