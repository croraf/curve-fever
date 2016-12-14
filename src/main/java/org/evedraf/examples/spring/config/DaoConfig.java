package org.evedraf.examples.spring.config;

import org.hibernate.SessionFactory;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.jdbc.datasource.DriverManagerDataSource;
import org.springframework.orm.hibernate5.HibernateTransactionManager;
import org.springframework.orm.hibernate5.LocalSessionFactoryBuilder;
import org.springframework.transaction.annotation.EnableTransactionManagement;

import javax.persistence.EntityManager;
import javax.sql.DataSource;
import java.util.Properties;

@Configuration
@EnableTransactionManagement
public class DaoConfig {

    @Bean
    SessionFactory getSessionFactory(){

        LocalSessionFactoryBuilder sessionFactory = new LocalSessionFactoryBuilder(getDataSource());

        sessionFactory.scanPackages("org.evedraf.examples.spring.model");

        Properties properties = new Properties();
        properties.put("dialect", "org.hibernate.dialect.HSQLDialect");

        properties.put("hibernate.show_sql", "true");
        /*properties.put("hibernate.hbm2ddl.auto", "update");
        properties.put("hibernate.generate_statistics", "true");
        */

        sessionFactory.addProperties(properties);

        return sessionFactory.buildSessionFactory();
    }

    @Bean
    HibernateTransactionManager getTransactionManager(){

        HibernateTransactionManager transactionManager = new HibernateTransactionManager();
        transactionManager.setSessionFactory(getSessionFactory());
        return transactionManager;
    }

    @Bean
    DataSource getDataSource(){

        DriverManagerDataSource dataSource = new DriverManagerDataSource();
        dataSource.setDriverClassName("org.hsqldb.jdbc.JDBCDriver");
        dataSource.setUrl("jdbc:hsqldb:hsql://localhost:9001");
        dataSource.setUsername("sa");
        dataSource.setPassword("");

        return dataSource;
    }


}
