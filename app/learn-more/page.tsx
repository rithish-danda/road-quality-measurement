import Link from 'next/link'

export default function LearnMore() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-3xl">
      <div className="mb-6">
        <Link href="/" className="inline-block px-3 py-2 rounded-md bg-primary text-primary-foreground hover:bg-accent hover:text-accent-foreground transition-colors">
          ← Back to Home
        </Link>
      </div>
      <h2 className="text-3xl font-bold mb-6">Learn More About Our Project</h2>
      <div className="space-y-6 text-lg">
        <p>
          Our Road Quality Measurement project utilizes cutting-edge satellite imagery and advanced deep learning models to assess and analyze road conditions on a large scale. This innovative approach allows for efficient and cost-effective monitoring of infrastructure, providing valuable insights for urban planners, government agencies, and maintenance teams.
        </p>
        <p>
          By leveraging high-resolution satellite images, we can detect various road quality indicators such as cracks, potholes, and surface degradation. Our deep learning algorithms are trained on vast datasets, enabling them to accurately identify and classify different types of road defects across diverse geographical areas.
        </p>
        <p>
          The benefits of this technology include:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Rapid assessment of large road networks</li>
          <li>Early detection of potential road hazards</li>
          <li>Prioritization of maintenance efforts</li>
          <li>Cost reduction in road inspection processes</li>
          <li>Improved road safety for all users</li>
        </ul>
        <p>
          Our project aims to revolutionize the way road quality is monitored and maintained, ultimately contributing to safer and more efficient transportation infrastructure worldwide.
        </p>
      </div>
    </div>
  )
}

