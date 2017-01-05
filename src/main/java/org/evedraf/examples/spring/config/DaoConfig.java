package org.evedraf.examples.spring.config;

import com.heroku.sdk.jdbc.DatabaseUrl;
import org.hibernate.SessionFactory;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.jdbc.datasource.DriverManagerDataSource;
import org.springframework.orm.hibernate5.HibernateTransactionManager;
import org.springframework.orm.hibernate5.LocalSessionFactoryBuilder;
import org.springframework.transaction.annotation.EnableTransactionManagement;

import javax.persistence.EntityManager;
import javax.sql.DataSource;
import java.net.URISyntaxException;
import java.sql.Connection;
import java.sql.SQLException;
import java.util.Properties;

@Configuration
@EnableTransactionManagement
public class DaoConfig {

    @Bean
    SessionFactory getSessionFactory(){

        LocalSessionFactoryBuilder sessionFactory = new LocalSessionFactoryBuilder(getDataSource());

        sessionFactory.scanPackages("org.evedraf.examples.spring.model");

        Properties properties = new Properties();
        properties.put("dialect", "org.hibernate.dialect.PostgreSQL95Dialect");

        properties.put("hibernate.show_sql", "true");
        properties.put("hibernate.hbm2ddl.auto", "update");
        properties.put("hibernate.generate_statistics", "true");


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

        /*Connection connection = null;
        try {
            connection = DatabaseUrl.extract().getConnection();
        } catch (SQLException e) {
            e.printStackTrace();
        } catch (URISyntaxException e) {
            e.printStackTrace();
        }*/


        DriverManagerDataSource dataSource = new DriverManagerDataSource();

        String dbUrl = System.getenv("JDBC_DATABASE_URL");
        String username = System.getenv("JDBC_DATABASE_USERNAME");
        String password = System.getenv("JDBC_DATABASE_PASSWORD");
        dataSource.setUrl(dbUrl);
        dataSource.setUsername(username);
        dataSource.setPassword(password);



        /*dataSource.setDriverClassName("org.hsqldb.jdbc.JDBCDriver");
        dataSource.setUrl("postgres://jjxrrhmuvwdsdy:c611504c353a2240a099a1ce47da35e4fd670c5ca5f82960d28847b05cd24147@ec2-107-20-149-243.compute-1.amazonaws.com:5432/d65670563i6thc");
        dataSource.setUsername("sa");
        dataSource.setPassword("");*/

        return dataSource;
    }


}
