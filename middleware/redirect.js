export default ({ app, route, redirect }) => {
  const isExistingRoute = app.router.options.routes.some((option) => option.name === route.name)
  if (!isExistingRoute) redirect('/')
}