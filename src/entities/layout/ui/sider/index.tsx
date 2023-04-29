import { useRouter } from 'next/router'
import { FC } from 'react'
import { usePathname } from 'next/navigation'

import { LayoutSlice } from 'entities/layout'

// import { MenuItems } from 'entities/layout/config/menu'

interface SiderProps {}

export const Sider: FC<SiderProps> = ({}) => {
	const path = usePathname()
	const router = useRouter()

	const { sideCollapsed } = LayoutSlice.useGet()
	// const onClickMenu: MenuProps['onClick'] = ({ key }) => {
	// 	router.push(key)
	// }

	return (
		<div
			className={'bg-gray-900 '}
			// collapsedWidth={width}
			// collapsed={sideCollapsed}
		>
			{/*<Menu*/}
			{/*	theme={'dark'}*/}
			{/*	mode={'vertical'}*/}
			{/*	items={MenuItems}*/}
			{/*	selectedKeys={[path!]}*/}
			{/*	onClick={onClickMenu}*/}
			{/*/>*/}
		</div>
	)
}

const width = 80

export const SiderLoad: FC = () => {
	return <div className={'bg-gray-900 w-20'}></div>
}
