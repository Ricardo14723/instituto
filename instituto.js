      document.write(`
<!--Sección de Descarga-->
<div class="download-container">
    <!--Header-->
    <div class="series-header">
        <div class="series-icon">⬇</div>
        <div class="series-info">
            <h1>Enlaces de Descarga - El instituto</h1>
            <p>Audio Latino e Ingles</p>
        </div>
    </div>

    <!--Pestañas-->
    <div class="tabs-container">
        <button class="tab-button active" onclick="showSeason(1)">Temporada 1</button>
    </div>

    <!--Temporada 1-->
    <div class="tab-content active" id="season-1">
        <div class="season-info">
            <div class="season-title">📺 Primera Temporada</div>
            <div class="season-specs">
                <div class="season-spec">
                    <div class="spec-label">AUDIO</div>
                    <div class="spec-value">Latino EAC3 5.1</div><div class="spec-value">Ingles EAC3 5.1</div></div><div class="season-spec"><div class="spec-label">FORMATO</div>
                    <div class="spec-value">MKV</div>
                </div>
                <div class="season-spec">
                    <div class="spec-label">PESO TEMPORADA</div>
                    <div class="spec-value">? GB</div>
                </div>
                <div class="season-spec">
                    <div class="spec-label">RESOLUCIÓN</div>
                    <div class="spec-value">1920 x 960</div>
                </div>
            </div>
        </div>

        <div class="episodes-grid">
            <div class="episode-card">
                <div class="episode-header">
                    <div class="episode-number">1-2</div>
                    <h3 class="episode-title">Episodios 1 y 2</h3>
                </div>
                <div class="episode-specs">
                    <div class="episode-spec">
                        <div class="episode-spec-label">PESO</div>
                        <div class="episode-spec-value">2.94 GB</div>
                    </div>
                    <div class="episode-spec">
                        <div class="episode-spec-label">DURACIÓN TOTAL</div>
                        <div class="episode-spec-value">~113 min
                      </div>
                    </div>
                </div>
                <a class="download-button" href="https://tpi.li/InT1To1" target="_blank">
                    <span>📥</span>
                    <span>DESCARGAR</span>
                </a>
            </div>

          <!--<div class="episode-card">
                <div class="episode-header">
                    <div class="episode-number">3-4</div>
                    <h3 class="episode-title">Episodios 3 y 4</h3>
                </div>
                <div class="episode-specs">
                    <div class="episode-spec">
                        <div class="episode-spec-label">PESO</div>
                        <div class="episode-spec-value">1.42 GB</div>
                    </div>
                    <div class="episode-spec">
                        <div class="episode-spec-label">DURACIÓN TOTAL</div>
                        <div class="episode-spec-value">~124 min</div>
                    </div>
                </div>
                <a class="download-button" href="https://tpi.li/P4s0R3" target="_blank">
                    <span>📥</span>
                    <span>DESCARGAR</span>
                </a>
            </div>

          <div class="episode-card">
                <div class="episode-header">
                    <div class="episode-number">5-6</div>
                    <h3 class="episode-title">Episodios 5 y 6</h3>
                </div>
                <div class="episode-specs">
                    <div class="episode-spec">
                        <div class="episode-spec-label">PESO&nbsp;</div>
                        <div class="episode-spec-value">1.49 GB</div>
                    </div>
                    <div class="episode-spec">
                        <div class="episode-spec-label">DURACIÓN TOTAL</div>
                        <div class="episode-spec-value">~129 min</div>
                    </div>
                </div>
                <a class="download-button" href="https://tpi.li/P4s0R5" target="_blank">
                    <span>📥</span>
                    <span>DESCARGAR</span>
                </a>
            </div>
          

           <div class="episode-card">
                <div class="episode-header">
                    <div class="episode-number">7</div>
                    <h3 class="episode-title">Episodio 7</h3>
                </div>
                <div class="episode-specs">
                    <div class="episode-spec">
                        <div class="episode-spec-label">PESO</div>
                        <div class="episode-spec-value">766 MB</div>
                    </div>
                    <div class="episode-spec">
                        <div class="episode-spec-label">DURACIÓN TOTAL</div>
                        <div class="episode-spec-value">~60 min</div>
                    </div>
                </div>
                <a class="download-button" href="https://tpi.li/P4s0R7" target="_blank">
                    <span>📥</span>
                    <span>DESCARGAR</span>
                </a>
            </div>-->
                      
        </div>
    </div>

  <!--Contraseña-->
    <div class="password-section">
        <div class="password-header">
            <span class="password-icon">🔐</span>
            <h3 class="password-title">Contraseña del Archivo</h3>
        </div>
        <div class="password-container">
            <input class="password-text" readonly="" type="text" value="mymoviesplayseries" />
            <button class="copy-button" onclick="copyPassword()">
                <span id="copy-text">📋 Copiar</span>
            </button>
        </div>
    </div>
</div>
`);
  