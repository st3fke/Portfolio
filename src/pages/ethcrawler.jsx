import * as React from "react"
import { Link } from "gatsby"
import { Parallax } from "@react-spring/parallax"
import { Themed } from "@theme-ui/mdx"
import Layout from "@lekoarts/gatsby-theme-cara/src/components/layout"
import Divider from "@lekoarts/gatsby-theme-cara/src/elements/divider"
import { UpDown, UpDownWide } from "@lekoarts/gatsby-theme-cara/src/styles/animations"
import Svg from "@lekoarts/gatsby-theme-cara/src/components/svg"
import Seo from "@lekoarts/gatsby-theme-cara/src/components/seo"
import Content from "@lekoarts/gatsby-theme-cara/src/elements/content"
import Inner from "@lekoarts/gatsby-theme-cara/src/elements/inner"

const DeepHuntPage = (_props) => (
  <Layout>
    <Parallax pages={1}>
      <div>
        <Divider speed={0.2} offset={0} factor={1}>
          <UpDown>
            <Svg icon="triangle" hiddenMobile width={48} stroke color="icon_orange" left="10%" top="20%" />
            <Svg icon="hexa" width={48} stroke color="icon_red" left="60%" top="70%" />
            <Svg icon="box" width={6} color="icon_darker" left="60%" top="15%" />
          </UpDown>
          <UpDownWide>
            <Svg icon="arrowUp" hiddenMobile width={16} color="icon_blue" left="80%" top="10%" />
            <Svg icon="triangle" width={12} stroke color="icon_brightest" left="90%" top="50%" />
            <Svg icon="circle" width={16} color="icon_darker" left="70%" top="90%" />
            <Svg icon="triangle" width={16} stroke color="icon_darkest" left="30%" top="65%" />
            <Svg icon="cross" width={16} stroke color="icon_pink" left="28%" top="15%" />
          </UpDownWide>
        </Divider>
        <Content sx={{ variant: `texts.bigger` }} speed={0.4} offset={0} factor={1}>
          <Inner>
            <Themed.h1>DeepHunt 🎮</Themed.h1>
            <img
              src="/deephunt.png"
              alt="DeepHunt"
              style={{ width: "400px", borderRadius: "12px", marginBottom: "20px" }}
            />
            <Themed.p>
              DeepHunt is a Unity-based 2D diving game with immersive gameplay and custom shaders.
            </Themed.p>
            <Themed.p>
              <Link to="/">⬅ Back to Projects</Link>
            </Themed.p>
          </Inner>
        </Content>
      </div>
    </Parallax>
  </Layout>
)

export default DeepHuntPage

export const Head = () => <Seo title="DeepHunt" />
