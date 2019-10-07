<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
    version="2.0">
    
    <xsl:output method="html" encoding="UTF-8" indent="yes"/>
    
    <xsl:template match="/">
        <xsl:result-document href="html/index.html">
            <html>
                <head>
                    <title>Arqueossítios</title>
                    <meta charset="UTF8"></meta>
                    <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"/>
                </head>
                <body>
                    <h1>Arqueossítios</h1>
                    <h3>Indice</h3>
                    <ol>
                        <xsl:apply-templates mode="indice"/>
                    </ol>
                </body>
            </html>
        </xsl:result-document>
        <xsl:apply-templates/>
    </xsl:template>
    
    <xsl:template match="ARQELEM" mode="indice">
        <li>
            <a href="arqelem-{generate-id()}.html"><xsl:value-of select="IDENTI"/></a>
        </li>
    </xsl:template>
    
    <xsl:template match="ARQELEM">
        <xsl:result-document href="html/arqelem-{generate-id()}.html">
            <html>
                <head>
                    <title>Arqueossítios</title>
                    <meta charset="UTF-8"/>
                    <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"/>
                </head>
                <body>
                    <h1 style="text-align:center">Arqueossítios</h1>
                    <table class="w3-table w3-large">
                        <tr>
                            <th>Identificação:</th><td><xsl:value-of select="IDENTI"/></td>
                        </tr>
                    </table>
                    <table class="w3-table w3-large">
                        <tr>
                            <th>Descrição:</th><td><xsl:value-of select="DESCRI"/></td>
                        </tr>
                    </table>
                    <hr/>
                    <table class="w3-table w3-striped">
                        <tr>
                            <th>Cronologia:</th><td><xsl:value-of select="CRONO"/></td>
                        </tr>
                        <tr>
                            <th>Lugar:</th><td><xsl:value-of select="LUGAR"/></td>
                        </tr>
                        <tr>
                            <th>Freguesia:</th><td><xsl:value-of select="FREG"/></td>
                        </tr>
                        <tr>
                            <th>Concelho:</th><td><xsl:value-of select="CONCEL"/></td>
                        </tr>
                        <tr>
                            <th>Latitude:</th><td><xsl:value-of select="LATITU"/></td>
                        </tr>
                        <tr>
                            <th>Longitude:</th><td><xsl:value-of select="LONGIT"/></td>
                        </tr>
                        <tr>
                            <th>Altitude</th><td><xsl:value-of select="ALTITU"/></td>
                        </tr> 
                    </table>
                    <hr/>
                    <table class="w3-table">
                        <tr>
                            <th>Quadro</th><td><xsl:value-of select="QUADRO"/></td>
                        </tr>
                        <tr>
                            <th>Autor</th><td><xsl:value-of select="AUTOR"/></td>
                        </tr>
                        <tr>
                            <th>Bibliografia</th><td><xsl:value-of select="BIBLIO"/></td>
                        </tr>
                        <tr>
                            <th>Deposito</th><td><xsl:value-of select="DEPOSI"/></td>
                        </tr>
                        <tr>
                            <th>Desenho Arquitetural</th><td><xsl:value-of select="DESARQ"/></td>
                        </tr>
                        <tr>
                            <th>Interesse</th><td><xsl:value-of select="INTERE"/></td>
                        </tr>
                        <tr>
                            <th>Interpretação</th><td><xsl:value-of select="INTERP"/></td>
                        </tr>
                        <tr>
                            <th>Trabalhos no Arquiosítio</th><td><xsl:value-of select="TRAARQ"/></td>
                        </tr>
                        <tr>
                            <th>Data</th><td><xsl:value-of select="DATA"/></td>
                        </tr>
                        
                    </table>
                    
                    
                    <hr/>
                    <address>
                        <a href="index.html#{generate-id()}">Voltar à página principal</a>
                    </address>
                </body>
            </html>
        </xsl:result-document>  
    </xsl:template>
    
</xsl:stylesheet>