package org.evedraf.examples.spring.config;


import org.evedraf.examples.spring.websocket.WebSocketHandler;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.socket.config.annotation.EnableWebSocket;
import org.springframework.web.socket.config.annotation.WebSocketConfigurer;
import org.springframework.web.socket.config.annotation.WebSocketHandlerRegistry;
import org.springframework.web.socket.server.HandshakeInterceptor;
import org.springframework.web.socket.server.standard.ServletServerContainerFactoryBean;
import org.springframework.web.socket.server.support.HttpSessionHandshakeInterceptor;

import java.util.Arrays;

/**
 * Created by Korisnik on 15.1.2017..
 */

@Configuration
@EnableWebSocket
public class WebSocketConfig implements WebSocketConfigurer {

    @Override
    public void registerWebSocketHandlers(WebSocketHandlerRegistry registry) {

        registry.addHandler(webSocketHandler(), "/webSocket").
                addInterceptors(handshakeInterceptor());

    }

    @Bean
    public org.springframework.web.socket.WebSocketHandler webSocketHandler() {
        return new WebSocketHandler();
    }

    @Bean HandshakeInterceptor handshakeInterceptor(){

        return new HttpSessionHandshakeInterceptor(
                Arrays.asList("user")
        );
    }



    @Bean
    public ServletServerContainerFactoryBean createWebSocketContainer() {
        ServletServerContainerFactoryBean container = new ServletServerContainerFactoryBean();
        container.setMaxSessionIdleTimeout(60*60*1000); //one hour
        return container;
    }



}