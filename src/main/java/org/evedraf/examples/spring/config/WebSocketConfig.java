package org.evedraf.examples.spring.config;


import org.evedraf.examples.spring.websocket.ChatSocketHandler;
import org.evedraf.examples.spring.websocket.PositionsSocketHandler;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.socket.WebSocketHandler;
import org.springframework.web.socket.config.annotation.EnableWebSocket;
import org.springframework.web.socket.config.annotation.WebSocketConfigurer;
import org.springframework.web.socket.config.annotation.WebSocketHandlerRegistry;

/**
 * Created by Korisnik on 15.1.2017..
 */

@Configuration
@EnableWebSocket
public class WebSocketConfig implements WebSocketConfigurer {

    @Override
    public void registerWebSocketHandlers(WebSocketHandlerRegistry registry) {
        registry.addHandler(mySocketHandler(), "/positionsSocket");
        registry.addHandler(chatSocketHandler(), "/chatSocket");
    }

    @Bean
    public WebSocketHandler mySocketHandler() {
        return new PositionsSocketHandler();
    }

    @Bean
    public WebSocketHandler chatSocketHandler() {
        return new ChatSocketHandler();
    }

}