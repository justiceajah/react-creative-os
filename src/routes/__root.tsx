import { createRootRoute, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import { NavHeader } from '../components/NavHeader/NavHeader'


export const Route = createRootRoute({
  component: () => (
    <>
      <div className="w-full">
       <NavHeader/>
      </div>
      <hr />
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
})
