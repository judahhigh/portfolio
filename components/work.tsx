import * as elements from "typed-html";

export function WorkExperience() {
  const workSectionClass = "w-full flex flex-col py-10 px-8 items-center";

  return (
    <div class={workSectionClass}>
      <p class="text-3xl md:text-4xl font-bold pb-8 text-center text-primary-content">
        Work Experience
      </p>
      <p class="w-full lg:w-9/12 xl:w-6/12 text-lg md:text-2xl pb-8 text-justify">
        This section highlights some of the impactful projects I have worked on
        throughout my career. I have worked on projects spanning from simple
        tools and services all the way up to full stack cloud-native web
        applications. This section should give the reader a much clearer picture
        of what I am capable of as a professional software engineer.
      </p>
      <p class="text-2xl md:text-3xl font-normal text-center text-secondary rounded-xl pb-4">
        Principle Software Engineer - Agenus, Inc
      </p>
      <div class="collapse collapse-plus bg-base-200 lg:w-9/12 xl:w-9/12 mb-4">
        <input type="checkbox" name="my-accordion-1" class="peer" />
        <div class="collapse-title text-xl md:text-2xl font-normal text-center text-primary-content peer-checked:bg-gray-800">
          ETL Clinical Trial Data Pipelines
        </div>
        <div class="collapse-content grid grid-cols-1 flex-wrap justify-center items-center gap-4 peer-checked:bg-gray-800">
          <p class="text-xl text-center font-bold text-primary-content">
            Description
          </p>
          <p class="text-lg text-justify px-8">
            This project entailed the creation of data pipelines to funnel raw
            clinical trial data sourced from a backend server into a data
            transformation service and then though a loading service. The
            loading service pushed transformed data into cloud database systems
            to promote high-availability of critical clinical trial data for
            scientists and engineers who needed to explore and analyze this
            data.
          </p>
          <p class="text-xl text-center font-bold text-primary-content">
            Contributions
          </p>
          <ul class="list-disc px-8">
            <li class="text-lg">
              Implemented a service to transfer raw clinical trial data from a
              server to a staging data location for downstream processing.
            </li>
            <li class="text-lg">
              Implemented a data processing service to transform raw clinical
              data into a form for ingestion by downstream services.
            </li>
            <li class="text-lg">
              Implemented a loading service to take processed raw clinical data
              and serve it on a serverless analytics service.
            </li>
            <li class="text-lg">
              Containerized the extraction and transform services which were
              deployed as serverless compute services on the cloud.
            </li>
            <li class="text-lg">
              Implemented a step-wise processing service to automate the ETL
              processing pipeline service.
            </li>
            <li class="text-lg">
              Created an event-based system to trigger the ETL pipeline upon the
              acquisition of new raw clinical trial data deposits.
            </li>
            <li class="text-lg">
              Configured a service to provide real-time monitoring of the ETL
              pipeline.
            </li>
            <li class="text-lg">
              Directed and mentored junior engineers to fulfill scoped tasks
              related to the implementation and deployment of all services.
            </li>
            <li class="text-lg">
              Made strict adherence to test-driven development practices to
              ensure clean, performant, and error-tolerant code.
            </li>
            <li class="text-lg">
              Stood up CI/CD infrastructure to manage testing and deployment of
              ETL pipelines.
            </li>
            <li class="text-lg">
              Provisioned and configured all cloud infrastructure as code.
            </li>
          </ul>
          <p class="text-xl text-center text-primary-content">
            Project contributions at a glance
          </p>
          <div class="grid grid-cols-1 md:grid-cols-3 bg-base-200 rounded-2xl shadow-lg">
            <div class="stat place-items-center px-16">
              <div class="stat-title">Insertions</div>
              <div class="stat-value text-success">60.1K</div>
            </div>
            <div class="stat place-items-center px-16">
              <div class="stat-title">Deletions</div>
              <div class="stat-value text-error">30.9K</div>
            </div>
            <div class="stat place-items-center px-16">
              <div class="stat-title">Commits</div>
              <div class="stat-value text-accent">654</div>
            </div>
            <div class="stat place-items-center px-16">
              <div class="stat-title">Tests</div>
              <div class="stat-value text-secondary">533</div>
            </div>
            <div class="stat place-items-center px-16">
              <div class="stat-title">Cloud Services</div>
              <div class="stat-value text-warning">13</div>
              <div class="stat-desc">AWS</div>
            </div>
            <div class="stat place-items-center px-16">
              <div class="stat-title">Primary Language</div>
              <div class="stat-value text-warning">Python</div>
            </div>
            <div class="stat place-items-center px-16">
              <div class="stat-title">Time to completion</div>
              <div class="stat-value text-success">6 months</div>
            </div>
            <div class="stat place-items-center px-16">
              <div class="stat-title">Team size</div>
              <div class="stat-value text-info">4</div>
            </div>
            <div class="stat place-items-center px-16">
              <div class="stat-title">Team role</div>
              <div class="stat-value text-accent">Tech Lead</div>
            </div>
          </div>
        </div>
      </div>
      <div class="collapse collapse-plus bg-base-200 lg:w-9/12 xl:w-9/12 mb-4">
        <input type="checkbox" name="my-accordion-1" class="peer" />
        <div class="collapse-title text-xl md:text-2xl font-normal text-center text-primary-content peer-checked:bg-gray-800">
          Cloud-native Clinical Trial Data Web Application
        </div>
        <div class="collapse-content grid grid-cols-1 flex-wrap justify-center items-center gap-4 peer-checked:bg-gray-800">
          <p class="text-xl text-center font-bold text-primary-content">
            Description
          </p>
          <p class="text-lg text-justify px-8">
            This web application provided authenticated and authorized internal
            scientists, engineers, and clinicians an interface to analyze,
            explore, and export up-to-date clinical trial data. The app was
            gated through an Oauth2 workflow and data access was denied or
            granted based on user claims. The clinical trial data made available
            through the application was provided by in-house developed data
            pipelines that performed ETL processing functions to transform and
            load clinical trial data into a form on cloud storage ingestible by
            a backend service. The backend service was a highly available
            serverless REST API that the frontend would make requests against to
            retrieve information.
          </p>
          <p class="text-xl text-center font-bold text-primary-content">
            Contributions
          </p>
          <ul class="list-disc px-8">
            <li class="text-lg">
              Implemented a frontend application to retrieve and present raw and
              processed clinical trial data to users for interaction, analysis,
              and export.
            </li>
            <li class="text-lg">
              Implemented an Oauth2 workflow for the frontend through an
              application load balancer and an authentication service.
            </li>
            <li class="text-lg">
              Implemented a CORS configured backend REST API that the frontend
              would use to retrieve and present data for authenticated and
              authorized app users.
            </li>
            <li class="text-lg">
              Containerized and deployed the front and backend on container
              orchestration services within the cloud managed by application
              load balancers.
            </li>
            <li class="text-lg">
              Hooked into an in-house developed service orchestration service to
              trigger the transformation of raw and derived clinical trial data
              into a form necessary for ingestion and serving by the backend.
            </li>
            <li class="text-lg">
              Configured a service to provide real-time monitoring of the web
              application front and backend health.
            </li>
            <li class="text-lg">
              Directed and mentored junior engineers to fulfill scoped tasks
              related to the implementation and deployment of all services.
            </li>
            <li class="text-lg">
              Made strict adherence to test-driven development practices to
              ensure clean, performant, and error-tolerant code.
            </li>
            <li class="text-lg">
              Stood up CI/CD infrastructure to manage testing and deployment of
              the frontend and backend.
            </li>
            <li class="text-lg">
              Provisioned and configured all cloud infrastructure as code.
            </li>
          </ul>
          <p class="text-xl text-center text-primary-content">
            Project contributions at a glance
          </p>
          <div class="grid grid-cols-1 md:grid-cols-3 bg-base-200 rounded-2xl shadow-lg">
            <div class="stat place-items-center px-16">
              <div class="stat-title">Insertions</div>
              <div class="stat-value text-success">36.2K</div>
            </div>
            <div class="stat place-items-center px-16">
              <div class="stat-title">Deletions</div>
              <div class="stat-value text-error">25.3K</div>
            </div>
            <div class="stat place-items-center px-16">
              <div class="stat-title">Commits</div>
              <div class="stat-value text-accent">272</div>
            </div>
            <div class="stat place-items-center px-16">
              <div class="stat-title">Cloud Services</div>
              <div class="stat-value text-warning">18</div>
              <div class="stat-desc">AWS</div>
            </div>
            <div class="stat place-items-center px-16">
              <div class="stat-title">Frontend Language</div>
              <div class="stat-value text-warning">Rust</div>
            </div>
            <div class="stat place-items-center px-16">
              <div class="stat-title">Backend Language</div>
              <div class="stat-value text-warning">Rust</div>
            </div>
            <div class="stat place-items-center px-16">
              <div class="stat-title">Time to completion</div>
              <div class="stat-value text-success">3 months</div>
            </div>
            <div class="stat place-items-center px-16">
              <div class="stat-title">Team size</div>
              <div class="stat-value text-info">3</div>
            </div>
            <div class="stat place-items-center px-16">
              <div class="stat-title">Team role</div>
              <div class="stat-value text-accent">Tech Lead</div>
            </div>
          </div>
        </div>
      </div>

      <div class="collapse collapse-plus bg-base-200 lg:w-9/12 xl:w-9/12 mb-4">
        <input type="checkbox" name="my-accordion-1" class="peer" />
        <div class="collapse-title text-xl md:text-2xl font-normal text-center text-primary-content peer-checked:bg-gray-800">
          Cloud-native Data Pipeline Orchestration Service
        </div>
        <div class="collapse-content grid grid-cols-1 flex-wrap justify-center items-center gap-4 peer-checked:bg-gray-800">
          <p class="text-xl text-center font-bold text-primary-content">
            Description
          </p>
          <p class="text-lg text-justify px-8">
            This cloud-native orchestration service was responsible for
            monitoring and triggering all ETL/ELT data pipelines within the
            organization. The service was entirely built using cloud-based
            serverless technologies including highly available serverless
            database services. The function of the orchestration service was to
            automate all data pipelines stemming from data source updates by
            clinical trial operations groups. This orchestration service
            triggered raw clinical trial data extractions, downstream loading
            and transformation services, as well as web application service
            updates based on available clinical trial data updates.
          </p>
          <p class="text-xl text-center font-bold text-primary-content">
            Contributions
          </p>
          <ul class="list-disc px-8">
            <li class="text-lg">
              Implemented a cloud-native serverless pipeline orchestration
              service that responds to and pushes events from/to a serverless
              message broker.
            </li>
            <li class="text-lg">
              Provisioned and configured a cloud-based serverless message broker
              to shuttle messages to and from the orchestration service.
            </li>
            <li class="text-lg">
              Implemented a REST API backend service hosted on a serverless API
              gateway that the orchestration service leveraged.
            </li>
            <li class="text-lg">
              Provisioned and configured a cloud-based serverless NoSQL database
              backend interacted with by the REST API service the orchestration
              service leverages to manage state.
            </li>
            <li class="text-lg">
              Configured orchestration service to support all existing data
              pipelines, data sources, and downstream processing services.
            </li>
            <li class="text-lg">
              Directed and mentored junior engineers to fulfill scoped tasks
              related to the implementation and deployment of all services.
            </li>
            <li class="text-lg">
              Made strict adherence to test-driven development practices to
              ensure clean, performant, and error-tolerant code.
            </li>
            <li class="text-lg">
              Stood up CI/CD infrastructure to manage testing and deployment of
              the orchestration service.
            </li>
            <li class="text-lg">
              Provisioned and configured all cloud infrastructure as code.
            </li>
            <li class="text-lg">
              Configured service to monitor the health of the orchestration
              service in real time.
            </li>
          </ul>
          <p class="text-xl text-center text-primary-content">
            Project contributions at a glance
          </p>
          <div class="grid grid-cols-1 md:grid-cols-3 bg-base-200 rounded-2xl shadow-lg">
            <div class="stat place-items-center px-16">
              <div class="stat-title">Insertions</div>
              <div class="stat-value text-success">30.6K</div>
            </div>
            <div class="stat place-items-center px-16">
              <div class="stat-title">Deletions</div>
              <div class="stat-value text-error">15.6K</div>
            </div>
            <div class="stat place-items-center px-16">
              <div class="stat-title">Commits</div>
              <div class="stat-value text-accent">326</div>
            </div>
            <div class="stat place-items-center px-16">
              <div class="stat-title">Tests</div>
              <div class="stat-value text-secondary">224</div>
            </div>
            <div class="stat place-items-center px-16">
              <div class="stat-title">Cloud Services</div>
              <div class="stat-value text-warning">13</div>
            </div>
            <div class="stat place-items-center px-16">
              <div class="stat-title">Primary Language</div>
              <div class="stat-value text-warning">Rust</div>
            </div>
            <div class="stat place-items-center px-16">
              <div class="stat-title">Time to completion</div>
              <div class="stat-value text-success">3 months</div>
            </div>
            <div class="stat place-items-center px-16">
              <div class="stat-title">Team size</div>
              <div class="stat-value text-info">3</div>
            </div>
            <div class="stat place-items-center px-16">
              <div class="stat-title">Team role</div>
              <div class="stat-value text-accent">Tech Lead</div>
            </div>
          </div>
        </div>
      </div>

      <p class="text-2xl md:text-3xl font-normal text-center text-secondary rounded-xl pb-4">
        Staff Engineer II - Applied Research Associates
      </p>
      <div class="collapse collapse-plus bg-base-200 lg:w-9/12 xl:w-9/12 mb-4">
        <input type="checkbox" name="my-accordion-1" class="peer" />
        <div class="collapse-title text-xl md:text-2xl font-normal text-center text-primary-content peer-checked:bg-gray-800">
          Event Driven Calculation Engine
        </div>
        <div class="collapse-content grid grid-cols-1 flex-wrap justify-center items-center gap-4 peer-checked:bg-gray-800">
          <p class="text-xl text-center font-bold text-primary-content">
            Description
          </p>
          <p class="text-lg text-justify px-8">
            Created an event driven calculation engine to orchestrate
            calculation services for a physics-based simulation product. This
            engine brokered messages to and from various services to create a
            calculation flow through various physics models to effectuate
            predictions within the problem domain.
          </p>
          <p class="text-xl text-center font-bold text-primary-content">
            Contributions
          </p>
          <ul class="list-disc px-8">
            <li class="text-lg">
              Implemented message routing design to connect decoupled services
              to each other.
            </li>
            <li class="text-lg">
              Integrated the calculation engine into a physics-based simulation
              desktop application.
            </li>
            <li class="text-lg">
              Thoroughly tested the calculation engine against several bonafide
              verification and validation scenarios for accuracy.
            </li>
            <li class="text-lg">
              Benchmarked calculation engine to demonstrate efficiency gains
              relative to an older design.
            </li>
            <li class="text-lg">
              Upon product release, supported consumers in their use of the
              product and the new calculation engine.
            </li>
            <li class="text-lg">
              Worked with a team of four individuals including a junior staff
              member to accomplish the project goal.
            </li>
          </ul>
          <p class="text-xl text-center text-primary-content">
            Project contributions at a glance
          </p>
          <div class="grid grid-cols-1 md:grid-cols-3 bg-base-200 rounded-2xl shadow-lg">
            <div class="stat place-items-center px-16">
              <div class="stat-title">Primary Language</div>
              <div class="stat-value text-warning">C++</div>
            </div>
            <div class="stat place-items-center px-16">
              <div class="stat-title">Secondary Language</div>
              <div class="stat-value text-warning">Java</div>
            </div>
            <div class="stat place-items-center px-16">
              <div class="stat-title">Time to completion</div>
              <div class="stat-value text-success">6 months</div>
            </div>
            <div class="stat place-items-center px-16">
              <div class="stat-title">Team size</div>
              <div class="stat-value text-info">4</div>
            </div>
            <div class="stat place-items-center px-16">
              <div class="stat-title">Team role</div>
              <div class="stat-value text-accent">Tech Lead</div>
            </div>
          </div>
        </div>
      </div>
      <div class="collapse collapse-plus bg-base-200 lg:w-9/12 xl:w-9/12 mb-4">
        <input type="checkbox" name="my-accordion-1" class="peer" />
        <div class="collapse-title text-xl md:text-2xl font-normal text-center text-primary-content peer-checked:bg-gray-800">
          Bayesian Statistics Physics-based Prediction Model
        </div>
        <div class="collapse-content grid grid-cols-1 flex-wrap justify-center items-center gap-4 peer-checked:bg-gray-800">
          <p class="text-xl text-center font-bold text-primary-content">
            Description
          </p>
          <p class="text-lg text-justify px-8">
            Created a new feature relying on bayesian statistics to predict the
            latent space of unobserved variables to assist in the overall
            predictive capability of a well-established physics-based simulation
            product comprising millions of lines code. At the time, this product
            was developed and maintained by a team of up to 50 software
            engineers and developers.
          </p>
          <p class="text-xl text-center font-bold text-primary-content">
            Contributions
          </p>
          <ul class="list-disc px-8">
            <li class="text-lg">
              Implemented ETL services to process raw data into a form
              digestible by the bayesian model training service. As new data
              became available it was integrated into existing datasets.
            </li>
            <li class="text-lg">
              Created a predictive Bayesian-based model trained on raw data
              delivered by ETL data processing services.
            </li>
            <li class="text-lg">
              Thoroughly tested the bayesian model against many bonafide
              verification and validation scenarios for accuracy.
            </li>
            <li class="text-lg">
              Implemented a service to autogenerate Bayesian-model testing data
              into reports to package with software releases for user and
              subject matter expert review.
            </li>
            <li class="text-lg">
              Integrated the Bayesian model into an existing physics-based
              simulation product as an advanced feature to assist in certain
              simulation scenarios.
            </li>
            <li class="text-lg">
              Worked with a team of four individuals including a junior staff
              member to accomplish the project goal.
            </li>
            <li class="text-lg">
              On subsequent releases supported customers in their use and
              understanding of the new Bayesian model and it's use cases.
            </li>
          </ul>
          <p class="text-xl text-center text-primary-content">
            Project contributions at a glance
          </p>
          <div class="grid grid-cols-1 md:grid-cols-3 bg-base-200 rounded-2xl shadow-lg">
            <div class="stat place-items-center px-16">
              <div class="stat-title">Primary Language</div>
              <div class="stat-value text-warning">Python</div>
            </div>
            <div class="stat place-items-center px-16">
              <div class="stat-title">Secondary Language</div>
              <div class="stat-value text-warning">C++</div>
            </div>
            <div class="stat place-items-center px-16">
              <div class="stat-title">Time to completion</div>
              <div class="stat-value text-success">6 months</div>
            </div>
            <div class="stat place-items-center px-16">
              <div class="stat-title">Team size</div>
              <div class="stat-value text-info">3</div>
            </div>
            <div class="stat place-items-center px-16">
              <div class="stat-title">Team role</div>
              <div class="stat-value text-accent">Tech Lead</div>
            </div>
          </div>
        </div>
      </div>
      <div class="collapse collapse-plus bg-base-200 lg:w-9/12 xl:w-9/12 mb-4">
        <input type="checkbox" name="my-accordion-1" class="peer" />
        <div class="collapse-title text-xl md:text-2xl font-normal text-center text-primary-content peer-checked:bg-gray-800">
          System Characterization Platform
        </div>
        <div class="collapse-content grid grid-cols-1 flex-wrap justify-center items-center gap-4 peer-checked:bg-gray-800">
          <p class="text-xl text-center font-bold text-primary-content">
            Description
          </p>
          <p class="text-lg text-justify px-8">
            Created a software product to characterize systems according to a
            standard shared by various relevant organization. The goal was to
            create a standard database and system information source to
            integrate into various physics-based simulation products that relied
            heavily on this system characterization data. Prior to this tool,
            organizations used home grown standards and information. This
            product created a unified repository and source for system
            characterizations.
          </p>
          <p class="text-xl text-center font-bold text-primary-content">
            Contributions
          </p>
          <ul class="list-disc px-8">
            <li class="text-lg">
              Designed and implemented database schemas in accordance with the
              new system characterization standard.
            </li>
            <li class="text-lg">
              Implemented a backend database behind a REST API to support CRUD
              operations against the system characterization platform.
            </li>
            <li class="text-lg">
              Implemented an RPC-based service to support programmatic use of
              the standard system characterization platform.
            </li>
            <li class="text-lg">
              Created a frontend client to access, browse, and export system
              characterization info. This frontend made requests against the
              REST API to make CRUD operations.
            </li>
            <li class="text-lg">
              Integrated the new system characterization platform into a heavily
              used physics-based simulation desktop application product.
            </li>
            <li class="text-lg">
              On subsequent releases supported customers in their use and
              understanding of the system characterization platform.
            </li>
          </ul>
          <p class="text-xl text-center text-primary-content">
            Project contributions at a glance
          </p>
          <div class="grid grid-cols-1 md:grid-cols-3 bg-base-200 rounded-2xl shadow-lg">
            <div class="stat place-items-center px-16">
              <div class="stat-title">Primary Language</div>
              <div class="stat-value text-warning">C++</div>
            </div>
            <div class="stat place-items-center px-16">
              <div class="stat-title">Secondary Language</div>
              <div class="stat-value text-warning">Python</div>
            </div>
            <div class="stat place-items-center px-16">
              <div class="stat-title">Time to completion</div>
              <div class="stat-value text-success">4 months</div>
            </div>
            <div class="stat place-items-center px-16">
              <div class="stat-title">Team size</div>
              <div class="stat-value text-info">2</div>
            </div>
            <div class="stat place-items-center px-16">
              <div class="stat-title">Team role</div>
              <div class="stat-value text-accent">Tech Lead</div>
            </div>
          </div>
        </div>
      </div>
      <div class="collapse collapse-plus bg-base-200 lg:w-9/12 xl:w-9/12 mb-4">
        <input type="checkbox" name="my-accordion-1" class="peer" />
        <div class="collapse-title text-xl md:text-2xl font-normal text-center text-primary-content peer-checked:bg-gray-800">
          Physics-based Simulation Product Interface Overhaul
        </div>
        <div class="collapse-content grid grid-cols-1 flex-wrap justify-center items-center gap-4 peer-checked:bg-gray-800">
          <p class="text-xl text-center font-bold text-primary-content">
            Description
          </p>
          <p class="text-lg text-justify px-8">
            In efforts to modernize the then 25 year old product, I worked
            alongside a small team to shift the entire interface, all physics
            models, tools, and modules to a more modern desktop application
            development framework. This was a monumental undertaking that
            resulted in a shippable product within a short time frame and with
            limited resources.
          </p>
          <p class="text-xl text-center font-bold text-primary-content">
            Contributions
          </p>
          <ul class="list-disc px-8">
            <li class="text-lg">
              Lead a team tasked with identifying and selecting a candidate for
              a desktop application development framework to migrate the
              existing product to.
            </li>
            <li class="text-lg">
              Re-designed core models, modules, and tools within the constraints
              of the chosen application development framework.
            </li>
            <li class="text-lg">
              Integrated all re-designed models, modules, and tools together
              with the new application development framework.
            </li>
            <li class="text-lg">
              Upon integration, thoroughly tested the modernized product against
              all existing tests and fixed any problems where they occurred.
            </li>
            <li class="text-lg">
              Lead the demo for the entire customer base of the application to
              showcase the modernized product.
            </li>
            <li class="text-lg">
              Documented all efforts and technical designs into automated
              reports that were packaged with the product on release.
            </li>
            <li class="text-lg">
              On release supported customers in all aspects adopting the
              modernized product for use.
            </li>
          </ul>
          <p class="text-xl text-center text-primary-content">
            Project contributions at a glance
          </p>
          <div class="grid grid-cols-1 md:grid-cols-3 bg-base-200 rounded-2xl shadow-lg">
            <div class="stat place-items-center px-16">
              <div class="stat-title">Primary Language</div>
              <div class="stat-value text-warning">C++</div>
            </div>
            <div class="stat place-items-center px-16">
              <div class="stat-title">Secondary Language</div>
              <div class="stat-value text-warning">Python</div>
            </div>
            <div class="stat place-items-center px-16">
              <div class="stat-title">Tertiary Language</div>
              <div class="stat-value text-warning">Java</div>
            </div>
            <div class="stat place-items-center px-16">
              <div class="stat-title">Time to completion</div>
              <div class="stat-value text-success">5 months</div>
            </div>
            <div class="stat place-items-center px-16">
              <div class="stat-title">Team size</div>
              <div class="stat-value text-info">4</div>
            </div>
            <div class="stat place-items-center px-16">
              <div class="stat-title">Team role</div>
              <div class="stat-value text-accent">Tech Lead</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
