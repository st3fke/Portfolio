import * as React from "react"
import Layout from "@lekoarts/gatsby-theme-cara/src/components/layout"
import Seo from "@lekoarts/gatsby-theme-cara/src/components/seo"

const DeepHuntPage = () => (
  <Layout>
    <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "2rem", textAlign: "center" }}>
      <h1>Play DeepHunt 🎮</h1>
      <p>Unity-based 2D diving game — play directly in your browser!</p>

      <iframe
  src="/deephunt/index.html"
  width="960"
  height="600"
  style={{
    border: "none",
    borderRadius: "12px",
    boxShadow: "0 12px 28px rgba(0,0,0,0.25)",
    marginTop: "20px",
  }}
  title="DeepHunt Game"
/>

    </div>
  </Layout>
)

export default DeepHuntPage

export const Head = () => <Seo title="DeepHunt Game" />
