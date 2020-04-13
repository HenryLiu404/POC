package com.dig.project.messaging;

import org.slf4j.LoggerFactory;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.stereotype.Component;

import java.util.logging.Logger;

@Component
public class KafkaMessageListener {

    private Logger logger = (Logger) LoggerFactory.getLogger(this.getClass());

    @KafkaListener(topics = "test", groupId = "test-consumer")
    public void listen(String message) {
        logger.info("Recieved: {}", message);
    }
}