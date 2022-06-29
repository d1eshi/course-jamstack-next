import { Grid } from '@ui/Grid'
import { Button } from '@ui/Button'
import { Typography } from '@ui/Typography'
import { Layout } from '@components/Layout'
import React from 'react'
import { getPlantList } from '@api'

export default function Home() {
  React.useEffect(() => {
    getPlantList({ limit: 10 }).then((data) => {
      data.forEach((item) => {
        console.log(item.author.fullName)
      })
    })
  }, [])

  return (
    <Layout>
      <h1>hola</h1>
    </Layout>
  )
}
