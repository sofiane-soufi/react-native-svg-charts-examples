import React from 'react'

import { storiesOf } from '@storybook/react-native'

import ShowcaseCard from './decorators/showcase-container'

import AreaChart from './area-chart/with-line'
import AreaChartWithGradient from './area-chart/with-gradient'


import LineChart from './line-chart/with-shadow'

import MultipleBarChart from './bar-chart/with-multiple-data-sets'
import BarChartWithGradient from './bar-chart/with-gradient'

import PieChart from './pie-chart'
import PieChartWithLabels from './pie-chart/with-labels'

import ProgressCircle from './progress-circle'
import ProgressGauge from './progress-gauge'

import LayeredCharts from './layered-charts'
import Decorators from './decorator'
import Extras from './extras'

import XAxisScaleBandExample from './x-axis/scale-band'
import XAxisScaleTimeExample from './x-axis/scale-time'
import XAxisScaleLinearExample from './x-axis/scale-linear'

import YAxisExample from './y-axis'

import WaterfallChartExample from './waterfall-chart'

import AreaStack from './area-stack/'
import AreaStackWithAxisExample from './area-stack/with-y-axis'
import StackedBarChartExample from './bar-stack/index'

import GridMinMax from './grid-min-max'
import CustomGrid from './custom-grid'
import PartialAreaChart from './partial-chart/area-chart'
import PartialLineChart from './partial-chart/line-chart'

storiesOf('AreaChart', module)
    .addDecorator(getStory => <ShowcaseCard>{ getStory() }</ShowcaseCard>)
    .add('With Gradient', () => <AreaChartWithGradient/>)
    .add('Stack with axis', () => <AreaStackWithAxisExample/>)

storiesOf('LineChart', module)
    .addDecorator(getStory => <ShowcaseCard>{ getStory() }</ShowcaseCard>)
    .add('With shadow', () => <LineChart/>)

storiesOf('BarChart', module)
    .addDecorator(getStory => <ShowcaseCard>{ getStory() }</ShowcaseCard>)
    .add('With Multiple data set', () => <MultipleBarChart/>)
    .add('With Gradient', () => <BarChartWithGradient/>)

storiesOf('PieChart', module)
    .addDecorator(getStory => <ShowcaseCard>{ getStory() }</ShowcaseCard>)
    .add('Standard', () => <PieChart/>)
    .add('With labels', () => <PieChartWithLabels/>)

storiesOf('ProgressCircle', module)
    .addDecorator(getStory => <ShowcaseCard>{ getStory() }</ShowcaseCard>)
    .add('Standard', () => <ProgressCircle/>)
    .add('Gauge', () => <ProgressGauge/>)

storiesOf('Axes', module)
    .addDecorator(getStory => <ShowcaseCard>{ getStory() }</ShowcaseCard>)
    .add('YAxis', () => <YAxisExample/>)
    .add('XAxis - scaleLinear', () => <XAxisScaleLinearExample/>)
    .add('XAxis - scaleTime', () => <XAxisScaleTimeExample/>)
    .add('XAxis - scaleBand', () => <XAxisScaleBandExample/>)

storiesOf('Others', module)
    .addDecorator(getStory => <ShowcaseCard>{ getStory() }</ShowcaseCard>)
    .add('Layered charts', () => <LayeredCharts/>)
    .add('Decorators', () => <Decorators/>)
    .add('Extras', () => <Extras/>)
    .add('Grid Min/Max', () => <GridMinMax/>)
    .add('Custom Grid', () => <CustomGrid/>)
    .add('Partial Area Chart', () => <PartialAreaChart/>)
    .add('Partial Line Chart', () => <PartialLineChart/>)
