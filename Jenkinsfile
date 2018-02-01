pipeline {

    agent any 
    tools {nodejs "nodejs-9.x"}
    parameters {
        string(name: 'ORGANIZATION', description: 'Apigee Organization')
        string(name: 'ENVIRONMENT', description: 'Apigee Environment')
    }
    stages {
        stage('Deploy'){
            steps {
                withCredentials([[$class: 'UsernamePasswordMultiBinding', credentialsId: 'apigee-credentials',
                            usernameVariable: 'USERNAME', passwordVariable: 'PASSWORD']]) {     
                    sh "npm install"
                    sh "gulp -u ${USERNAME} -p ${PASSWORD} -o ${params.ORGANIZATION} -e ${params.ENVIRONMENT} deploy"
                }
            }
        }
    }

}
