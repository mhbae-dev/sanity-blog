const Banner = () => {
  return (
    <div className="flex items-center justify-between border-y-black bg-yellow-300 py-10 lg:py-10">
      <div className="space-y-5 px-10">
        <h1 className="max-w-xl font-serif text-6xl">
          <span className="underline decoration-black decoration-4">
            Learning Journal
          </span>{' '}
          of my software development journey.
        </h1>
        <h2>
          This is a blog where I write down my thoughts about software development
        </h2>
      </div>
    </div>
  )
}

export default Banner
