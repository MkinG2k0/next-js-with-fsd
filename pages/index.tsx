import { GetServerSideProps } from 'next'
import { Main } from 'pages/main'
import { FC } from 'react'
import { WrapSSP } from 'shared/lib/server'

export const getServerSideProps: GetServerSideProps = () => WrapSSP([])

interface MainProps {}

const Index: FC<MainProps> = ({}) => <Main />

export default Index
