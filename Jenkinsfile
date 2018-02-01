pipeline {

    agent any
     
    withCredentials([[$class: 'UsernamePasswordMultiBinding', credentialsId: 'apigee-credentials',
                    usernameVariable: 'USERNAME', passwordVariable: 'PASSWORD']])     

    stage('Checkout'){

        checkout scm

    }

    stage('Test'){

        sh 'echo $USERNAME'

    }

}
