import { createRootRoute, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import { NavHeader } from '../components/nav-header/NavHeader'


export const Route = createRootRoute({
  component: () => (
    <div className='max-w-[1540px] mx-auto'>
      <div className="w-full border-[1px]">
       <NavHeader/>
      </div>
      <hr />
      <Outlet />
      <TanStackRouterDevtools />
    </div>
  ),
})
