import { FC } from 'react'
import { Button } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'

import { store } from 'core/store'
import { LayoutSlice } from 'entities/layout'

interface sideBtnProps {}

export const SiderBtn: FC<sideBtnProps> = ({}) => {
	const { sideCollapsed } = LayoutSlice.useGet()

	const onCollapse = () => {
		store.dispatch(LayoutSlice.setSideCollapsed())
	}

	return (
		<div
			className={
				'bg-gray-800 flex items-center justify-center w-20 flex-grow-0 flex-shrink-0'
			}
		>
			<Button onClick={onCollapse} className={'align-top text-white'}>
				<MenuIcon />
				{/*{sideCollapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}*/}
			</Button>
		</div>
	)
}
