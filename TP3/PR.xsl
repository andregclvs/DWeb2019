<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
    version="2.0">
    
    <xsl:output method="xhtml" indent="yes" encoding="UTF-8"/>

    <xsl:template match="/pr">
        <html>
            <head>
                <title>TP3</title>
                <meta charset="UFT8"/>
                <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"/>
            </head>
            <body>
                <h1 style="text-align:center">Project Record</h1>
                
                <xsl:apply-templates select="metadata"/>
                
                <hr/>
                
                <h2>WorkTeam:</h2>
                <ol>
                    <xsl:apply-templates select="workteam/worker"/>
                </ol>
                
                <hr/>
                
                <h2>Abstract:</h2>
                <xsl:apply-templates select="abstract/p"/>
                
                <hr/>
                
                <h2>Deliverables:</h2>
                <ul>
                    <xsl:apply-templates select="deliverables/deliverable"/>
                </ul>
                
            </body>
        </html>
    </xsl:template>
    
    <xsl:template match="metadata">
        <table class="w3-table">
            <tr>
                <th>KEYNAME:</th><td><xsl:value-of select="keyname"/></td>
            </tr>
            <tr>
                <th>TITLE:</th><td><xsl:value-of select="title"/></td>
            </tr>
            <tr>
                <th>SUBTITLE</th><td><xsl:value-of select="subtitle"/></td>
            </tr>
            <tr>
                <th>SUPERVISOR:</th><td><a href="{supervisor/@homepage}"><xsl:value-of select="supervisor"/></a></td>
            </tr>
            <tr>
                <th>BEGIN DATE</th><td><xsl:value-of select="bdate"/></td>
            </tr>
            <tr>
                <th>BEGIN DATE</th><td><xsl:value-of select="edate"/></td>
            </tr>
            <xsl:apply-templates select="file"/>
        </table>
        <hr/>
    </xsl:template>
    
    
    
    <xsl:template match="worker">
        <li><xsl:value-of select="name"/> - <xsl:value-of select="identifier"/> - <a href="{git}"><xsl:value-of select="git"/></a></li>
    </xsl:template>
    
    <xsl:template match="p">
        <p>
            <xsl:value-of select="."/>
        </p>
    </xsl:template>
    
    <xsl:template match="b">
        <b><xsl:apply-templates/> </b>
    </xsl:template>
    
    <xsl:template match="i">
        <i><xsl:apply-templates/> </i>
    </xsl:template>
    
    <xsl:template match="u">
        <u><xsl:apply-templates/> </u>
    </xsl:template>
    
    <xsl:template match="xref">
        <a href="{@url}"><xsl:value-of select="."/></a>
    </xsl:template>
    
    <xsl:template match="deliverable">
        <li><a href="{@path}"><xsl:value-of select="."/></a></li>
    </xsl:template>
</xsl:stylesheet>