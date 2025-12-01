import React from "react";
import Card from "../components/Card";

export default function Home() {
  return (
    <div className="container">

  
      <section className="hero">
        <h1>Paulo Eduardo Silva</h1>
        <p className="sub">
          Analista de TI • Desenvolvedor PHP • Automação • Infraestrutura
        </p>
      </section>

   
      <section className="section">
        <h2>Sobre Mim</h2>
        <p>
          Profissional com mais de 16 anos de experiência em tecnologia da
          informação e telecomunicações, atuando em projetos de infraestrutura,
          automação de processos, análise de dados e desenvolvimento de
          sistemas web. Experiência sólida em PHP, MySQL, SharePoint, Power
          Automate e Power Apps, criando soluções de produtividade e
          colaboração. Capacidade de integrar visão técnica e estratégica.
        </p>
      </section>

     
      <section className="section">
        <h2>Experiência Profissional</h2>

        <div className="cards">
          <Card
            title="Analista de TI – Agro Fonte Alta"
            subtitle="Jul 2024 – Ago 2025 • Poços de Caldas – MG"
            text={`• Implementação e manutenção de softwares internos
• Desenvolvimento de sistemas web em PHP
• Rotinas de backup e recuperação
• Automação com Power Automate e SharePoint
• Relatórios analíticos e dashboards
• Suporte à segurança da informação`}
          />

          <Card
            title="Técnico de TI – CTC/CNEN"
            subtitle="Dez 2022 – Jul 2024 • Poços de Caldas – MG"
            text={`• Suporte técnico helpdesk
• Instalação e configuração de sistemas
• Manutenção preventiva/corretiva
• Gestão de chamados internos`}
          />

          <Card
            title="Supervisor Operacional – Telemont"
            subtitle="Set 2006 – Set 2022 • Varginha – MG"
            text={`• Supervisão e treinamento de equipes
• Implementação de processos
• Apoio técnico em redes ADSL e FTTH
• Gestão de produtividade e materiais`}
          />
        </div>
      </section>

    
      <section className="section">
        <h2>Formação Acadêmica</h2>

        <div className="cards">
          <Card
            title="Bacharelado em Engenharia de Software"
            subtitle="Unicesumar • 2022–2026"
          />

          <Card
            title="Pós-Graduação em Gestão de Pessoas"
            subtitle="Centro Universitário do Sul de Minas • 2018"
          />

          <Card
            title="Tecnologia da Informação"
            subtitle="FAFIBE • 2010"
          />
        </div>
      </section>

    
      <section className="section">
        <h2>Certificações</h2>

        <div className="cards">
          <Card title="ITIL Foundation" subtitle="PeopleCert • 2026" />

          <Card
            title="Fundamentos em Cibersegurança / CyberOps"
            subtitle="Cisco Networking Academy"
          />

          <Card
            title="Formação em Fibra Óptica"
            subtitle="Caigetec / Telemont"
          />

          <Card
            title="Curso de MySQL"
            subtitle="Q-Cursos Network"
          />
        </div>
      </section>


      <section className="section">
        <h2>Competências Técnicas</h2>

        <ul className="skills">
          <li>PHP</li>
          <li>HTML</li>
          <li>JavaScript</li>
          <li>React</li>
          <li>MySQL</li>
          <li>SQL Server básico</li>
          <li>Modelagem de Dados</li>
          <li>Power BI</li>
          <li>Power Automate</li>
          <li>PowerApps</li>
          <li>SharePoint</li>
          <li>Excel Avançado</li>
          <li>LAN • WAN • WLAN • VoIP</li>
          <li>ADSL • FTTH</li>
        </ul>
      </section>

      {/* - - - - SOFT SKILLS - - - - */}
      <section className="section">
        <h2>Competências Comportamentais</h2>

        <ul className="skills">
          <li>Comunicação clara</li>
          <li>Trabalho em equipe</li>
          <li>Proatividade</li>
          <li>Liderança</li>
          <li>Foco em resultados</li>
        </ul>
      </section>

 
      <section className="section">
        <h2>Contato</h2>
        <p><strong>E-mail:</strong> pauloeduardopsilva@gmail.com</p>
        <p><strong>Celular:</strong> (35) 98429-3140</p>
        <p><strong>LinkedIn:</strong> linkedin.com/in/pauloeduardopsilva</p>
        <p><strong>Localização:</strong> Poços de Caldas – MG</p>
      </section>
    </div>
  );
}
