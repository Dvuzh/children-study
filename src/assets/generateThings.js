module.exports = { 
    // data: function() {
    //     return {
          
    //       currentColor: null,
    //     };
    //   },
    // computed: {
    //     currentColor() {
    //       return this.$store.getters.currentColor;
    //     }
    //   }, 
      methods:{

      
randomInt(min, max) {
    return min + Math.floor((max - min) * Math.random());
  },
  selectColor(color) {
    console.log(color)
    // this.data.currentColor = color;
    // console.log(this.data.currentColor)
    this.currentColor = color
  },
  generateThings(name, count, pottis, forms) {
      console.log('tut')
    for(let i = 0; i < count; i++) {
      this.draw(pottis,forms, name + (i + 1), 50 + (name == "fruits" ? 300 : 150) * i, 100 + (this.randomInt(-50, 50)), (name == "fruits" ? 1 : 0.2));
    }
    return [forms, pottis];
  },
  draw(pottis,forms,  type, x, y, scale = 0.2) {
    let obj = pottis.use(type, type, x, y);
    forms.push(obj)
    pottis.scale(obj, scale);
    pottis.addClick(obj, this.appleClicked);
    // pottis.addDrag(obj);
    // index++
  },

  appleClicked(element, e) {
    e
    // this.currentColor = this.$store.getters.currentColor;
    console.log(this.currentColor)
    if (this.currentColor == null) {
      return alert("Выберите цвет")
    }
    console.log(element)
    console.log(element.className)
    element.className.baseVal = "ic-" + this.currentColor
    console.log(element.className)
  },
}
}