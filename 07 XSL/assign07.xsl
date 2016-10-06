<?xml version="1.0"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:template match="/">
    <html>
      <style></style>
      <head>
        <title>Boy Scouts of America</title>
      </head>
      <body style="width:1000px;">
        <h1 style="postition: relative; margin-left: 50%; margin-top: 30px; font-size: 40px; ">Boy Scouts of America</h1>
          <xsl:for-each select="bsa/council">
            <div style="border: 3px solid black; text-align: center; 
                 position: relative; left: 20%; top: 18px; background-color: forestgreen;
                 font-size: 20px; font-weight: bold, width:1000px;">
              <xsl:value-of select="@name"/> Council
            </div>
            <br></br>
            <xsl:for-each select="troop">
              <table style="position:relative; left: 20%; width:1000px; background-color: 
                     black; color: black; border: 5px solid black; font-size: 20px;" border="1">
                <th style="position: relative; left: 400px; color: white;">
                  <div>
                    Troop
                    <xsl:value-of select="@troop-number"/>,
                    <xsl:value-of select="@unitname" />
                  </div>
                </th>
                <tr style="background-color: red; font-weight: bold; text-align: center">
                  <td>Scout</td>
                  <td>Address</td>
                  <td>City</td>
                  <td>State</td>
                  <td>Phone</td>
                  <td>Rank</td>
                  <td>Merit Badges</td>
                </tr>
                <xsl:for-each select="scout">
                  <tr style="text-align: center;">
                    <td style="background-color: orange;">
                      <xsl:value-of select="lastname"/>,
                      <xsl:value-of select="firstname"/>
                    </td>
                    <td style="background-color: turquoise">
                      <xsl:value-of select="address/street"/>
                    </td>
                    <td style="background-color: gray">
                      <xsl:value-of select="address/city"/>
                    </td>
                    <td style="background-color: purple">
                      <xsl:value-of select="address/state"/>
                    </td>
                    <td style="background-color: lightblue">
                      <xsl:value-of select="phone"/>
                    </td>
                    <td style="background-color: gold">
                      <xsl:value-of select="rank"/>
                      <xsl:value-of select="@date-earned"/>
                    </td>
                    <td style="background-color: navy">
                      <select style="width:170px;">
                        <xsl:choose>
                          <xsl:when test="not(meritbadge)">
                            <option>This scout has no merit badges</option>
                          </xsl:when>
                        </xsl:choose>
                        <xsl:for-each select="meritbadge">
                          <xsl:sort select="@date-earned" order="descending"/>
                          <option>
                            <xsl:value-of select="current()"/> (<xsl:value-of select="@date-earned"/>)
                          </option>
                        </xsl:for-each>
                      </select>
                    </td>
                  </tr>
                </xsl:for-each>
              </table>
            </xsl:for-each>
          </xsl:for-each>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
