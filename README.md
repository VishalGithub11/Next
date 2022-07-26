Incremental Static Regeneration--

There was a need to update only those pages which needed a change without having to rebuild
the entire app

Incremental Static Regeneration (ISR)
With ISR, Next.js allows you to update static pages after you've built your application

You can statically generate individual pages without needing to rebuild the entire site, effectively solving the issue of dealing with stale data

How?
In the getStaticProps function, apart from the props key, we can specify a "revalidate" key