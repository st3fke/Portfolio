import * as React from "react"
import { Parallax } from "@react-spring/parallax"
import { Themed } from "@theme-ui/mdx"
import Layout from "@lekoarts/gatsby-theme-cara/src/components/layout"
import Divider from "@lekoarts/gatsby-theme-cara/src/elements/divider"
import { UpDown, UpDownWide } from "@lekoarts/gatsby-theme-cara/src/styles/animations"
import Svg from "@lekoarts/gatsby-theme-cara/src/components/svg"
import Seo from "@lekoarts/gatsby-theme-cara/src/components/seo"
import Content from "@lekoarts/gatsby-theme-cara/src/elements/content"
import Inner from "@lekoarts/gatsby-theme-cara/src/elements/inner"
import { Unity, useUnityContext } from "react-unity-webgl"
import { Link } from "gatsby"

const DeepHunt = () => {
  const { unityProvider, isLoaded, loadingProgression } = useUnityContext({
    loaderUrl: "/deephunt/Build/deephunt.loader.js",
    dataUrl: "/deephunt/Build/deephunt.data.unityweb",
    frameworkUrl: "/deephunt/Build/deephunt.framework.js.unityweb",
    codeUrl: "/deephunt/Build/deephunt.wasm.unityweb",
  })

  // Colors for tags
  const tagColors = [
    "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    "linear-gradient(135deg, #f7971e 0%, #ffd200 100%)",
    "linear-gradient(135deg, #00c6ff 0%, #0072ff 100%)",
    "linear-gradient(135deg, #f953c6 0%, #b91d73 100%)",
    "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
  ]

  return (
    <Layout>
      <Parallax pages={1}>
        {/* Animated background */}
        <Divider speed={0.2} offset={0} factor={1}>
          <UpDown>
            <Svg icon="triangle" hiddenMobile width={48} stroke color="icon_orange" left="10%" top="20%" />
            <Svg icon="hexa" width={48} stroke color="icon_red" left="60%" top="70%" />
          </UpDown>
          <UpDownWide>
            <Svg icon="circle" width={16} color="icon_darker" left="70%" top="90%" />
            <Svg icon="triangle" width={16} stroke color="icon_darkest" left="30%" top="65%" />
            <Svg icon="cross" width={16} stroke color="icon_pink" left="28%" top="15%" />
          </UpDownWide>
        </Divider>

        {/* Hero section */}
        <section
          style={{
            width: "100%",
            textAlign: "center",
            padding: "3rem 1rem 2rem 1rem",
          }}
        >
          <Themed.h1 sx={{ fontSize: [5, 6, 7], mb: 2 }}>🎮 DeepHunt</Themed.h1>
          <Themed.p sx={{ fontSize: [2, 3], maxWidth: "700px", mx: "auto" }}>
            DeepHunt is a Unity 2D underwater adventure. <br />
            Explore ocean depths, avoid dangers, and uncover hidden secrets.
          </Themed.p>
        </section>

        {/* Main content */}
        <Content
          speed={0.4}
          offset={0}
          factor={1}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            px: [3, 4],
          }}
        >
          <Inner sx={{ width: "100%", maxWidth: "1100px", mx: "auto" }}>
            {/* Unity embed */}
            <div style={{ margin: "2rem auto", width: "100%", textAlign: "center" }}>
              {!isLoaded && (
                <p style={{ color: "#fff", marginBottom: "20px" }}>
                  Loading game... {Math.round(loadingProgression * 100)}%
                </p>
              )}
              <Unity
                unityProvider={unityProvider}
                style={{
                  width: "100%",
                  maxWidth: "960px",
                  height: "600px",
                  borderRadius: "12px",
                  boxShadow: "0 12px 28px rgba(0,0,0,0.5)",
                  background: "#000",
                  margin: "0 auto",
                }}
              />
            </div>

            {/* Tags */}
            <div
              style={{
                marginTop: "2rem",
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                gap: "12px",
              }}
            >
              {["Unity", "C#", "2D Game", "Pixel Art", "Shader Effects"].map((tag, i) => (
                <span
                  key={tag}
                  style={{
                    padding: "8px 16px",
                    borderRadius: "9999px",
                    background: tagColors[i % tagColors.length],
                    color: "#fff",
                    fontSize: "14px",
                    fontWeight: "600",
                    cursor: "default",
                    transition: "transform 0.2s ease, box-shadow 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "scale(1.1)"
                    e.currentTarget.style.boxShadow = "0 6px 16px rgba(0,0,0,0.3)"
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "scale(1)"
                    e.currentTarget.style.boxShadow = "none"
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Buttons */}
            <div style={{ marginTop: "2.5rem", display: "flex", gap: "16px", justifyContent: "center" }}>
              <a
                href="https://github.com/st3fke/deephunt"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-block",
                  padding: "12px 24px",
                  borderRadius: "8px",
                  background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                  color: "white",
                  fontWeight: "bold",
                  textDecoration: "none",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
              >
                🔗 View on GitHub
              </a>

              <Link
                to="/"
                style={{
                  display: "inline-block",
                  padding: "12px 24px",
                  borderRadius: "8px",
                  background: "linear-gradient(135deg, #ff6a00 0%, #ee0979 100%)",
                  color: "white",
                  fontWeight: "bold",
                  textDecoration: "none",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
              >
                ⬅ Back to Home
              </Link>
            </div>
          </Inner>
        </Content>
      </Parallax>
    </Layout>
  )
}

export default DeepHunt

export const Head = () => (
  <Seo
    title="DeepHunt – Unity WebGL Game"
    description="Play DeepHunt, a Unity 2D underwater adventure game."
  />
)
