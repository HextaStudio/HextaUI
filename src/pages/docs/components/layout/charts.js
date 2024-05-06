import { DocsLayout } from "@/components/DocsPage/DocsLayout";
import { CodeBlock } from "@/components/CodeBlock";
import React from "react";

import { NextSeo } from "next-seo";

import dynamic from "next/dynamic";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Bar,
  Pie,
  Cell,
  Rectangle,
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Area,
} from "recharts";

const PieChart = dynamic(
  () => import("recharts").then((recharts) => recharts.PieChart),
  { ssr: false }
);
const BarChart = dynamic(
  () => import("recharts").then((recharts) => recharts.BarChart),
  { ssr: false }
);
const AreaChart = dynamic(
  () => import("recharts").then((recharts) => recharts.AreaChart),
  { ssr: false }
);

const CustomLegend = (props) => {
  const { payload } = props;

  return (
    <ul className="flex items-center justify-center gap-4 mt-3 custom-legend">
      {payload.map((entry, index) => (
        <li
          key={`item-${index}`}
          style={{ color: entry.color }}
          className="flex items-center gap-1 text-sm"
        >
          <span
            className={`flex w-3 h-3 `}
            style={{
              background: entry.color,
            }}
          ></span>
          {entry.value}
        </li>
      ))}
    </ul>
  );
};

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="flex items-center justify-center text-black bg-white rounded custom-tooltip">
        <small className="p-2 label">{`${label}: ${payload[0].value}`}</small>
      </div>
    );
  }

  return null;
};

export const LineChartPreview = () => {
  const data = [
    { name: "Jan", Sales: 65 },
    { name: "Feb", Sales: 59 },
    { name: "Mar", Sales: 80 },
    { name: "Apr", Sales: 81 },
    { name: "May", Sales: 56 },
    { name: "Jun", Sales: 55 },
    { name: "Jul", Sales: 40 },
    { name: "Aug", Sales: 75 },
    { name: "Sep", Sales: 60 },
    { name: "Oct", Sales: 85 },
    { name: "Nov", Sales: 70 },
    { name: "Dec", Sales: 90 },
  ];

  return (
    <div className="bg-[#080808] rounded-lg overflow-auto flex justify-center items-center">
      <div className="w-[800px]  overflow-x-auto">
        <LineChart
          className="inter-fonts mt-7 -translate-x-[15px] mb-3"
          width={800}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" className="opacity-10" />
          <XAxis
            dataKey="name"
            stroke="#FFFFFF"
            style={{
              fontSize: "12px",
              opacity: "80%",
            }}
          />
          <YAxis
            stroke="#FFFFFF"
            style={{
              fontSize: "12px",
              opacity: "80%",
            }}
          />
          <Tooltip content={<CustomTooltip />} />
          <Legend content={<CustomLegend />} />
          <Line type="monotone" dataKey="Sales" stroke="#8B5CF6" />
        </LineChart>
      </div>
    </div>
  );
};

export const BarChartPreview = () => {
  const CustomBar = (props) => {
    const { fill, x, y, width, height } = props;
    return (
      <Rectangle
        {...props}
        radius={[7, 7, 0, 0]}
        fill={fill}
        x={x}
        y={y}
        width={width}
        height={height}
      />
    );
  };

  const data = [
    { name: "Jan", Sales: 65 },
    { name: "Feb", Sales: 59 },
    { name: "Mar", Sales: 80 },
    { name: "Apr", Sales: 81 },
    { name: "May", Sales: 56 },
    { name: "Jun", Sales: 55 },
    { name: "Jul", Sales: 40 },
    { name: "Aug", Sales: 75 },
    { name: "Sep", Sales: 60 },
    { name: "Oct", Sales: 85 },
    { name: "Nov", Sales: 70 },
    { name: "Dec", Sales: 90 },
  ];

  return (
    <div className="bg-[#080808] rounded-lg overflow-auto flex justify-center items-center">
      <div className="w-[800px]  overflow-x-auto">
        <BarChart
          className="inter-fonts mt-7 -translate-x-[15px] mb-3"
          width={800}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" className="opacity-10" />
          <XAxis
            dataKey="name"
            stroke="#FFFFFF"
            style={{
              fontSize: "12px",
              opacity: "80%",
            }}
          />
          <YAxis
            stroke="#FFFFFF"
            style={{
              fontSize: "12px",
              opacity: "80%",
            }}
          />
          <Tooltip content={<CustomTooltip />} />
          <Legend content={<CustomLegend />} />
          <Bar
            dataKey="Sales"
            fill="#8B5CF6"
            stroke="#8B5CF6"
            shape={<CustomBar />}
          />
        </BarChart>
      </div>
    </div>
  );
};

export const PieChartPreview = () => {
  const data = [
    { name: "Jan", value: 65 },
    { name: "Feb", value: 59 },
    { name: "Mar", value: 80 },
    { name: "Apr", value: 81 },
    { name: "May", value: 56 },
  ];

  const COLORS = ["#8B5CF6", "#9C6DF7", "#AD7FF8", "#BE90F9", "#CFA1FA"];

  return (
    <div className="bg-[#080808] rounded-lg overflow-auto flex justify-center items-center w-full">
      <div className="overflow-x-auto ">
        <PieChart className="mb-3 inter-fonts mt-7" width={300} height={300}>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={100}
            label
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                style={{
                  fontSize: "12px",
                  opacity: "80%",
                }}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip content={<CustomTooltip />} />
          <Legend content={<CustomLegend />} />
        </PieChart>
      </div>
    </div>
  );
};

export const RadarChartPreview = () => {
  const data = [
    { subject: "Jan", Sales: 65 },
    { subject: "Feb", Sales: 59 },
    { subject: "Mar", Sales: 80 },
    { subject: "Apr", Sales: 81 },
    { subject: "May", Sales: 56 },
    { subject: "Jun", Sales: 55 },
    { subject: "Jul", Sales: 40 },
    { subject: "Aug", Sales: 75 },
    { subject: "Sep", Sales: 60 },
    { subject: "Oct", Sales: 85 },
    { subject: "Nov", Sales: 70 },
    { subject: "Dec", Sales: 90 },
  ];

  return (
    <div className="bg-[#080808] rounded-lg overflow-auto flex justify-center items-center">
      <div className="w-[800px]  overflow-x-auto">
        <RadarChart
          className="inter-fonts mt-7 -translate-x-[15px] mb-3"
          width={800}
          height={300}
          data={data}
          style={{
            fontSize: "12px",
          }}
        >
          <PolarGrid />
          <PolarAngleAxis
            dataKey="subject"
            stroke="#FFFFFF"
            style={{
              fontSize: "12px",
              opacity: "80%",
            }}
          />
          <PolarRadiusAxis />
          <Radar
            name="Sales"
            dataKey="Sales"
            stroke="#8B5CF6"
            fill="#8B5CF6"
            fillOpacity={0.6}
          />
        </RadarChart>
      </div>
    </div>
  );
};

export const AreaChartPreview = () => {
  const data = [
    { name: "Jan", Sales: 65 },
    { name: "Feb", Sales: 59 },
    { name: "Mar", Sales: 80 },
    { name: "Apr", Sales: 81 },
    { name: "May", Sales: 56 },
    { name: "Jun", Sales: 55 },
    { name: "Jul", Sales: 40 },
    { name: "Aug", Sales: 75 },
    { name: "Sep", Sales: 60 },
    { name: "Oct", Sales: 85 },
    { name: "Nov", Sales: 70 },
    { name: "Dec", Sales: 90 },
  ];

  return (
    <div className="bg-[#080808] rounded-lg overflow-auto flex justify-center items-center">
      <div className="w-[800px]  overflow-x-auto">
        <AreaChart
          className="inter-fonts mt-7 -translate-x-[15px] mb-3"
          width={800}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" className="opacity-10" />
          <XAxis
            dataKey="name"
            stroke="#FFFFFF"
            style={{
              fontSize: "12px",
              opacity: "80%",
            }}
          />
          <YAxis
            stroke="#FFFFFF"
            style={{
              fontSize: "12px",
              opacity: "80%",
            }}
          />
          <Tooltip content={<CustomTooltip />} />
          <Legend content={<CustomLegend />} />
          <Area
            type="monotone"
            dataKey="Sales"
            stroke="#8B5CF6"
            fill="#8B5CF6"
          />
        </AreaChart>
      </div>
    </div>
  );
};

const charts = () => {
  return (
    <>
      {" "}
      <NextSeo
        title="Charts - HextaUI ✨"
        description="Collection of multiple charts with multiple variants."
        canonical="https://ui.hextastudio.in/docs/components/layout/charts"
        openGraph={{
          url: "https://ui.hextastudio.in/docs/components/layout/charts",
          title: "Charts - HextaUI ✨",
          description: "Collection of multiple charts with multiple variants.",
          images: [
            {
              url: "https://i.imgur.com/ngyVLlB.png",
              width: 1920,
              height: 1080,
              alt: "Charts - HextaUI ✨",
              type: "image/png",
            },
          ],
          siteName: "Charts - HextaUI ✨",
        }}
      />
      <DocsLayout>
        <main>
          {" "}
          <div className="header">
            <h1 className="h1">Charts</h1>
            <p className="text-sm opacity-80">
              Collection of multiple charts with multiple variants.
            </p>
          </div>
          <div>
            <div className="flex flex-col gap-4 py-10 preview">
              <div>
                <h3 className="h3">Installation</h3>
                <CodeBlock
                  lang="bash"
                  filename="bash"
                  code={`bun install recharts
# or
pnpm add recharts
# or
yarn add recharts
# or
npm i recharts`}
                />
              </div>
            </div>
          </div>
          <div>
            <div className="flex flex-col gap-4 pb-10 preview">
              <div>
                <h3 className="h3">Import</h3>
                <CodeBlock
                  lang="plaintext"
                  filename="caution"
                  code={`Since we're using next js we have access to next/dynamic, if you're not using next js then dynamic importing could be different for you.`}
                />
                <CodeBlock
                  lang="jsx"
                  filename="jsx"
                  code={`import dynamic from "next/dynamic";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Bar,
  Pie,
  Cell,
  Rectangle,
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Area,
} from "recharts";

const PieChart = dynamic(
  () => import("recharts").then((recharts) => recharts.PieChart),
  { ssr: false }
);
const BarChart = dynamic(
  () => import("recharts").then((recharts) => recharts.BarChart),
  { ssr: false }
);
const AreaChart = dynamic(
  () => import("recharts").then((recharts) => recharts.AreaChart),
  { ssr: false }
);

const CustomLegend = (props) => {
    const { payload } = props;

    return (
        <ul className="flex items-center justify-center gap-4 mt-3 custom-legend">
        {payload.map((entry, index) => (
            <li
            key={\`item-\${index}\`}
            style={{ color: entry.color }}
            className="flex items-center gap-1 text-sm"
            >
            <span
                className={\`flex w-3 h-3 \`}
                style={{
                background: entry.color,
                }}
            ></span>
            {entry.value}
            </li>
        ))}
        </ul>
    );
};

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="flex items-center justify-center text-black bg-white rounded custom-tooltip">
        <small className="p-2 label">{\`\${label}: \${payload[0].value}\`}</small>
      </div>
    );
  }

  return null;
};
`}
                />
              </div>
            </div>
          </div>
          <div>
            <div className="installation">
              <h3 className="h3">Line chart</h3>
              <div className="relative flex items-center justify-center my-3 overflow-hidden border border-white border-opacity-10 rounded-2xl preview-container p-[1rem]">
                <LineChartPreview />
              </div>
            </div>
          </div>
          <div>
            <h3 className="h3">Code</h3>
            <CodeBlock
              lang="jsx"
              filename="jsx"
              code={`export const LineChartPreview = () => {
  const data = [
    { name: "Jan", Sales: 65 },
    { name: "Feb", Sales: 59 },
    { name: "Mar", Sales: 80 },
    { name: "Apr", Sales: 81 },
    { name: "May", Sales: 56 },
    { name: "Jun", Sales: 55 },
    { name: "Jul", Sales: 40 },
    { name: "Aug", Sales: 75 },
    { name: "Sep", Sales: 60 },
    { name: "Oct", Sales: 85 },
    { name: "Nov", Sales: 70 },
    { name: "Dec", Sales: 90 },
  ];

  return (
    <div className="bg-[#080808] rounded-lg overflow-auto flex justify-center items-center">
      <div className="w-[800px]  overflow-x-auto">
        <LineChart
          className="inter-fonts mt-7 -translate-x-[15px] mb-3"
          width={800}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" className="opacity-10" />
          <XAxis
            dataKey="name"
            stroke="#FFFFFF"
            style={{
              fontSize: "12px",
              opacity: "80%",
            }}
          />
          <YAxis
            stroke="#FFFFFF"
            style={{
              fontSize: "12px",
              opacity: "80%",
            }}
          />
          <Tooltip content={<CustomTooltip/>}/>
          <Legend content={<CustomLegend />} />
          <Line type="monotone" dataKey="Sales" stroke="#8B5CF6" />
        </LineChart>
      </div>
    </div>
  );
};`}
            />
          </div>
          <div>
            <div className="flex flex-col gap-4 py-10 preview">
              <div>
                <h3 className="h3">Bar Chart</h3>
                <div className="relative flex items-center justify-center my-3 overflow-hidden border border-white border-opacity-10 rounded-2xl preview-container p-[1rem]">
                  <BarChartPreview />
                </div>
                <div>
                  <h3 className="h3">Code</h3>
                  <CodeBlock
                    lang="jsx"
                    filename="jsx"
                    code={`export const BarChartPreview = () => {
  const CustomBar = (props) => {
    const { fill, x, y, width, height } = props;
    return (
      <Rectangle
        {...props}
        radius={[7, 7, 0, 0]}
        fill={fill}
        x={x}
        y={y}
        width={width}
        height={height}
      />
    );
  };

  const data = [
    { name: "Jan", Sales: 65 },
    { name: "Feb", Sales: 59 },
    { name: "Mar", Sales: 80 },
    { name: "Apr", Sales: 81 },
    { name: "May", Sales: 56 },
    { name: "Jun", Sales: 55 },
    { name: "Jul", Sales: 40 },
    { name: "Aug", Sales: 75 },
    { name: "Sep", Sales: 60 },
    { name: "Oct", Sales: 85 },
    { name: "Nov", Sales: 70 },
    { name: "Dec", Sales: 90 },
  ];

  return (
    <div className="bg-[#080808] rounded-lg overflow-auto flex justify-center items-center">
      <div className="w-[800px]  overflow-x-auto">
        <BarChart
          className="inter-fonts mt-7 -translate-x-[15px] mb-3"
          width={800}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" className="opacity-10" />
          <XAxis
            dataKey="name"
            stroke="#FFFFFF"
            style={{
              fontSize: "12px",
              opacity: "80%",
            }}
          />
          <YAxis
            stroke="#FFFFFF"
            style={{
              fontSize: "12px",
              opacity: "80%",
            }}
          />
          <Tooltip content={<CustomTooltip/>}/>
          <Legend content={<CustomLegend />} />
          <Bar
            dataKey="Sales"
            fill="#8B5CF6"
            stroke="#8B5CF6"
            shape={<CustomBar />}
          />
        </BarChart>
      </div>
    </div>
  );
};`}
                  />
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="flex flex-col gap-4 py-10 preview">
              <div>
                <h3 className="h3">Pie Chart</h3>
                <div className="relative flex items-center justify-center my-3 overflow-hidden border border-white border-opacity-10 rounded-2xl preview-container p-[1rem]">
                  <PieChartPreview />
                </div>
              </div>
              <div>
                <h3 className="h3">Code</h3>
                <CodeBlock
                  lang="jsx"
                  filename="jsx"
                  code={`export const PieChartPreview = () => {
  const data = [
    { name: "Jan", value: 65 },
    { name: "Feb", value: 59 },
    { name: "Mar", value: 80 },
    { name: "Apr", value: 81 },
    { name: "May", value: 56 },
  ];

  const COLORS = ["#8B5CF6", "#9C6DF7", "#AD7FF8", "#BE90F9", "#CFA1FA"];

  return (
    <div className="bg-[#080808] rounded-lg overflow-auto flex justify-center items-center w-full">
      <div className="overflow-x-auto ">
        <PieChart className="mb-3 inter-fonts mt-7" width={300} height={300}>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={100}
            label
          >
            {data.map((entry, index) => (
              <Cell
                key={\`cell-\${index}\`}
                style={{
                  fontSize: "12px",
                  opacity: "80%",
                }}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip content={<CustomTooltip/>}/>
          <Legend content={<CustomLegend />} />
        </PieChart>
      </div>
    </div>
  );
};
`}
                />
              </div>
            </div>
          </div>
          <div>
            <div className="flex flex-col gap-4 py-10 preview">
              <div>
                <h3 className="h3">Radar Chart</h3>
                <div className="relative flex items-center justify-center my-3 overflow-hidden border border-white border-opacity-10 rounded-2xl preview-container p-[1rem]">
                  <RadarChartPreview />
                </div>
              </div>
              <div>
                <h3 className="h3">Code</h3>
                <CodeBlock
                  lang="jsx"
                  filename="jsx"
                  code={`export const RadarChartPreview = () => {
  const data = [
    { subject: "Jan", Sales: 65 },
    { subject: "Feb", Sales: 59 },
    { subject: "Mar", Sales: 80 },
    { subject: "Apr", Sales: 81 },
    { subject: "May", Sales: 56 },
    { subject: "Jun", Sales: 55 },
    { subject: "Jul", Sales: 40 },
    { subject: "Aug", Sales: 75 },
    { subject: "Sep", Sales: 60 },
    { subject: "Oct", Sales: 85 },
    { subject: "Nov", Sales: 70 },
    { subject: "Dec", Sales: 90 },
  ];

  return (
    <div className="bg-[#080808] rounded-lg overflow-auto flex justify-center items-center">
      <div className="w-[800px]  overflow-x-auto">
        <RadarChart
          className="inter-fonts mt-7 -translate-x-[15px] mb-3"
          width={800}
          height={300}
          data={data}
          style={{
            fontSize: "12px",
          }}
        >
          <PolarGrid />
          <PolarAngleAxis
            dataKey="subject"
            stroke="#FFFFFF"
            style={{
              fontSize: "12px",
              opacity: "80%",
            }}
          />
          <PolarRadiusAxis />
          <Radar
            name="Sales"
            dataKey="Sales"
            stroke="#8B5CF6"
            fill="#8B5CF6"
            fillOpacity={0.6}
          />
        </RadarChart>
      </div>
    </div>
  );
};`}
                />
              </div>
            </div>
          </div>
          <div>
            <div className="flex flex-col gap-4 py-10 preview">
              <div>
                <h3 className="h3">Area Chart</h3>
                <div className="relative flex items-center justify-center my-3 overflow-hidden border border-white border-opacity-10 rounded-2xl preview-container p-[1rem]">
                  <AreaChartPreview />
                </div>
              </div>
              <div>
                <h3 className="h3">Code</h3>
                <CodeBlock
                  lang="jsx"
                  filename="jsx"
                  code={`export const AreaChart = () => {
  const data = [
    { name: "Jan", Sales: 65 },
    { name: "Feb", Sales: 59 },
    { name: "Mar", Sales: 80 },
    { name: "Apr", Sales: 81 },
    { name: "May", Sales: 56 },
    { name: "Jun", Sales: 55 },
    { name: "Jul", Sales: 40 },
    { name: "Aug", Sales: 75 },
    { name: "Sep", Sales: 60 },
    { name: "Oct", Sales: 85 },
    { name: "Nov", Sales: 70 },
    { name: "Dec", Sales: 90 },
  ];

  return (
    <div className="bg-[#080808] rounded-lg overflow-auto flex justify-center items-center">
      <div className="w-[800px]  overflow-x-auto">
        <AreaChart
          className="inter-fonts mt-7 -translate-x-[15px] mb-3"
          width={800}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" className="opacity-10" />
          <XAxis
            dataKey="name"
            stroke="#FFFFFF"
            style={{
              fontSize: "12px",
              opacity: "80%",
            }}
          />
          <YAxis
            stroke="#FFFFFF"
            style={{
              fontSize: "12px",
              opacity: "80%",
            }}
          />
          <Tooltip content={<CustomTooltip/>}/>
          <Legend content={<CustomLegend />} />
          <Area
            type="monotone"
            dataKey="Sales"
            stroke="#8B5CF6"
            fill="#8B5CF6"
          />
        </AreaChart>
      </div>
    </div>
  );
};`}
                />
              </div>
            </div>
          </div>
        </main>
      </DocsLayout>
    </>
  );
};

export default charts;
