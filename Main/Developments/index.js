import { Fade } from "react-awesome-reveal"
import SliderBanners from "../../../lt-modules/Slider/SliderBanners"
import style from "../main.module.scss"

export default function MainDevelopments(props) {
  return (
    <>
      <section className={style.developments}>
        <Fade direction="up" triggerOnce>
          <h2 className={style.title}>
            {props.title}
          </h2>
        </Fade>
        <SliderBanners
          buttonText={props.buttonText}
          data={props.sliderData}
        />
      </section>
    </>
  )
}