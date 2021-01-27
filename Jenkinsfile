// import org.jenkinsci.plugins.pipeline.modeldefinition.Utils

// properties([disableConcurrentBuilds()])

node {
    // def repetitive values
    def team = 'sdk'
    def project = 'tagged-console'
    try {
    checkout scm

    stage('Semantic release') {
        if (shouldRelease) {
            withVault([vaultSecrets: [[path        : "secret/teams/${team}/jenkins/nexus",
                                     secretValues: [[envVar: 'NPM_USER', vaultKey: 'username'],
                                                    [envVar: 'NPM_PASS', vaultKey: 'password']]]]]) {
                withCredentials([usernamePassword(credentialsId: 'ghe-pae1fr',
                                                usernameVariable: 'DUMMY',
                                                passwordVariable: 'GITHUB_TOKEN')]) {
                    withEnv([
                        'NPM_EMAIL=jenkins@ebike.dev',
                        'NPM_REGISTRY=https://nexus.ebike.dev/repository/npm/',
                        'NPM_SCOPE=@boschebike',
                        'RELEASE_ARG=--no-ci']) {

                        sh "docker-compose up --abort-on-container-exit --exit-code-from ebds-publish ebds-publish"
                    }
                }
            }
        }
    }
}
