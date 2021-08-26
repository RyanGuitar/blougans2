
import {
  images
} from '../data/images.js'

function Slider() {
  let template = '';
  for (let {
    name, title
  } of images) {
    template += `
    <div class="padding">
    <img src=${name} alt=${name} class="sticker-gallery" loading="lazy">
    </div>`

  }
  return template;
}

export default Slider()
