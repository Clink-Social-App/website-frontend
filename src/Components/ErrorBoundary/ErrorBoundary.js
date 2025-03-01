import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './ErrorBoundary.css';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      hasError: false,
      error: null,
      errorInfo: null
    };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    console.error('Error caught by ErrorBoundary:', error, errorInfo);
    this.setState({
      error: error,
      errorInfo: errorInfo
    });
  }

  handleReset = () => {
    // Reset the error state
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null
    });
    
    // Reload the current page
    window.location.reload();
  }

  render() {
    if (this.state.hasError) {
      // Render fallback UI
      return (
        <div className="error-page">
          <Container>
            <Row className="justify-content-center text-center">
              <Col md={8} lg={6}>
                <div className="error-container">
                  <div className="error-icon">
                    <i className="fas fa-exclamation-triangle"></i>
                  </div>
                  <h1>Oops! Something Went Wrong</h1>
                  <p className="error-message">
                    We're sorry, but an unexpected error has occurred.
                  </p>
                  
                  <div className="error-actions">
                    <Button 
                      variant="primary" 
                      className="action-button"
                      onClick={this.handleReset}
                    >
                      Try Again
                    </Button>
                    <Button 
                      variant="outline-light" 
                      className="action-button"
                      onClick={() => window.location.href = '/'}
                    >
                      Go To Homepage
                    </Button>
                  </div>
                  
                  {/* Show technical details only in development */}
                  {process.env.NODE_ENV === 'development' && this.state.error && (
                    <div className="error-details">
                      <h5>Error Details (Development Only):</h5>
                      <p>{this.state.error.toString()}</p>
                      <div className="stack-trace">
                        {this.state.errorInfo.componentStack}
                      </div>
                    </div>
                  )}
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      );
    }

    // If there's no error, render children normally
    return this.props.children;
  }
}

export default ErrorBoundary;