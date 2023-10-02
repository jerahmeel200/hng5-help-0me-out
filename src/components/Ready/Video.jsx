const src = "https://www.youtube.com/watch?v=GBg_80Jtzfo";

const Video = () => {
  return (
    <section className="border border-zinc-500 w-11/12 mx-auto rounded-xl ">
      <video controls className="w-full h-full rounded-xl">
        <source src={src} type="video/mp4" />
        Sorry, your browser does not support embedded videos.
      </video>
    </section>
  );
};

export default Video;
