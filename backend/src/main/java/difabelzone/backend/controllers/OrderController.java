package difabelzone.backend.controllers;

import difabelzone.backend.payloads.OrderDTO;
import difabelzone.backend.payloads.OrderRequestDTO;
import difabelzone.backend.services.OrderService;
import difabelzone.backend.util.AuthUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class OrderController {

     @Autowired
     private OrderService orderService;

     @Autowired
     private AuthUtil authUtil;

     @PostMapping("/order/users/payments/{paymentMethod}")
     public ResponseEntity<OrderDTO> orderProducts(@PathVariable String paymentMethod, @RequestBody OrderRequestDTO orderRequestDTO) {
          String emailId = authUtil.loggedInEmail();
          OrderDTO order = orderService.placeOrder(
                  emailId,
                  orderRequestDTO.getAddressId(),
                  paymentMethod,
                  orderRequestDTO.getPgName(),
                  orderRequestDTO.getPgPaymentId(),
                  orderRequestDTO.getPgStatus(),
                  orderRequestDTO.getPgResponseMessage()
          );
          return new ResponseEntity<>(order, HttpStatus.CREATED);
     }
}
