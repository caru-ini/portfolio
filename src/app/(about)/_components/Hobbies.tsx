const Hobbies = () => {
  return (
    <section className='py-12 md:py-16 lg:py-24' id='hobbies'>
      <div className='container space-y-3'>
        <div className='inline-block rounded-lg bg-primary px-3 py-1 text-sm text-white'>
          Hobbies
        </div>
        <h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl'>Hobbies</h2>
        <div className='grid gap-8 p-2 md:grid-cols-2'>
          <div>
            <h3 className='text-xl font-semibold'>サーバーいじり</h3>
            <p className='mt-2 text-muted-foreground'>
              Proxmoxを入れて、Nextcloudでファイル共有に使ったり、SSHでVSCodeを使ったりしています。
              メモリが大量に積んであるので、友達とマイクラするときに重宝してます。
            </p>
          </div>
          {/* <div>
            <h3 className='text-xl font-semibold'>音楽鑑賞</h3>
            <p className='mt-2 text-muted-foreground'>
              界隈曲やリスペクト曲を聴くのが好きです。特に好きなアーティストは
              <a href='https://youtube.com/@ELwhale35' target='_blank' rel='noopener noreferrer'>
                電‡鯨
              </a>
              さんです。一回聞いてみて欲しい。
            </p>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Hobbies;
