import { useInView } from "react-hook-inview"
import VideoBlock from "../../../lt-modules/VideoBlock"
import style from "../headband.module.scss"

export default function Video(props) {
  const [ref, refVisible] = useInView(
    {
      unobserveOnEnter: true
    }
  )
  return (
    <div
      className={`${style.video} fade-up-animation`}
      ref={ref}
      key={refVisible ? "video" : "video-inview"}
    >
      <VideoBlock theme="short" videoLink={props.videoLink} />
    </div>
  )
}