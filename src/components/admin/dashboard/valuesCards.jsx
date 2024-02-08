import React from 'react'
import { Card, Metric, Text } from "@tremor/react";

const ValuesCards = () => {
  return (
  <div className="grid grid-cols-3 gap-1">
 <Card className="max-w-xs mx-auto" decoration="top" decorationColor="indigo">
    <Text>Total sales</Text>
    <Metric>34,743 TND</Metric>
    <p className="text-green-300">+34.5%</p>
 </Card>
 <Card className="max-w-xs mx-auto" decoration="top" decorationColor="orange">
    <Text>Total returns</Text>
    <Metric>30,500 TND</Metric>
    <p className="text-red-300">-20.5%</p>
 </Card>
 <Card className="max-w-xs mx-auto" decoration="top" decorationColor="fuchsia">
    <Text>Total subscriptions</Text>
    <Metric>30,000 TND</Metric>
    <p className="text-green-300">+10%</p>
 </Card>
  </div>
  )
}

export default ValuesCards
