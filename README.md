

getStaticPaths fallback: 'blocking'
When?
On a UX level, sometimes, people prefer the page to be loaded without a loading indicator 

if the wait time is a few milli seconds. This helps avoid the layout shift.
Some crawlers did not support JavaScript. The loading page would be rendered and then the full
page would be loaded which was causing a problem.